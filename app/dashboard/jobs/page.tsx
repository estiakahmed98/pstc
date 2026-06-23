"use client";

import { useMemo, useState } from "react";
import { Briefcase, Plus, Search, Edit, Trash2, Eye, X } from "lucide-react";

type JobStatus = "active" | "closed" | "draft";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  status: JobStatus;
  createdAt: string;
};

const initialJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full Time",
    salary: "$800 - $1200",
    status: "active",
    createdAt: "2026-06-20",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    department: "Design",
    location: "Dhaka",
    type: "Part Time",
    salary: "$500 - $800",
    status: "active",
    createdAt: "2026-06-18",
  },
  {
    id: "3",
    title: "Content Writer",
    department: "Marketing",
    location: "Hybrid",
    type: "Contract",
    salary: "$300 - $600",
    status: "closed",
    createdAt: "2026-06-10",
  },
];

export default function JobsManagementPage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    salary: "",
    status: "active" as JobStatus,
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.department.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());

      const matchStatus = statusFilter === "all" || job.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [jobs, search, statusFilter]);

  const handleAdd = () => {
    setEditingJob(null);
    setFormData({
      title: "",
      department: "",
      location: "",
      type: "",
      salary: "",
      status: "active",
    });
    setOpenModal(true);
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      salary: job.salary,
      status: job.status,
    });
    setOpenModal(true);
  };

  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.department ||
      !formData.location ||
      !formData.type
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editingJob) {
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editingJob.id ? { ...job, ...formData } : job,
        ),
      );
    } else {
      setJobs((prev) => [
        {
          id: Date.now().toString(),
          ...formData,
          createdAt: new Date().toISOString().split("T")[0],
        },
        ...prev,
      ]);
    }

    setOpenModal(false);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const statusClass = {
    active: "bg-green-100 text-green-700",
    closed: "bg-red-100 text-red-700",
    draft: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className=" space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Briefcase className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Jobs Management
              </h1>
              <p className="text-sm text-slate-500">
                Manage job posts, departments, status and hiring information.
              </p>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add New Job
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Stats title="Total Jobs" value={jobs.length} />
          <Stats
            title="Active"
            value={jobs.filter((job) => job.status === "active").length}
          />
          <Stats
            title="Closed"
            value={jobs.filter((job) => job.status === "closed").length}
          />
          <Stats
            title="Draft"
            value={jobs.filter((job) => job.status === "draft").length}
          />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-slate-100 text-sm text-slate-600">
                <tr>
                  <th className="px-5 py-4">Job Title</th>
                  <th className="px-5 py-4">Department</th>
                  <th className="px-5 py-4">Location</th>
                  <th className="px-5 py-4">Type</th>
                  <th className="px-5 py-4">Salary</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Created</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {job.title}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      {job.department}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      {job.location}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      {job.type}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      {job.salary}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass[job.status]}`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-500">
                      {job.createdAt}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-blue-600 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          onClick={() => handleEdit(job)}
                          className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-amber-500 hover:text-white"
                        >
                          <Edit className="h-4 w-4" />
                        </button>

                        <button
                          onClick={() => handleDelete(job.id)}
                          className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredJobs.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-5 py-12 text-center">
                      <Briefcase className="mx-auto h-10 w-10 text-slate-300" />
                      <p className="mt-3 font-semibold text-slate-700">
                        No jobs found
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {editingJob ? "Edit Job" : "Add New Job"}
                </h2>
                <p className="text-sm text-slate-500">
                  Fill job information below.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-2">
              <Input
                label="Job Title"
                value={formData.title}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, title: value }))
                }
              />

              <Input
                label="Department"
                value={formData.department}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, department: value }))
                }
              />

              <Input
                label="Location"
                value={formData.location}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, location: value }))
                }
              />

              <Input
                label="Job Type"
                value={formData.type}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
              />

              <Input
                label="Salary"
                value={formData.salary}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, salary: value }))
                }
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.value as JobStatus,
                    }))
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 p-5">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
              >
                {editingJob ? "Update Job" : "Create Job"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stats({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">{value}</h2>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}
