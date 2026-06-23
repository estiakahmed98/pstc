"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  X,
  CalendarDays,
  Users,
  MapPin,
} from "lucide-react";

type TrainingStatus = "upcoming" | "running" | "completed" | "cancelled";

type Training = {
  id: string;
  title: string;
  category: string;
  trainer: string;
  location: string;
  startDate: string;
  endDate: string;
  participants: number;
  status: TrainingStatus;
};

const initialTrainings: Training[] = [
  {
    id: "1",
    title: "Community Health Awareness Training",
    category: "Health",
    trainer: "Dr. Rahman",
    location: "Dhaka",
    startDate: "2026-07-01",
    endDate: "2026-07-03",
    participants: 45,
    status: "upcoming",
  },
  {
    id: "2",
    title: "Population Development Workshop",
    category: "Development",
    trainer: "Nusrat Jahan",
    location: "Chattogram",
    startDate: "2026-06-20",
    endDate: "2026-06-22",
    participants: 60,
    status: "running",
  },
  {
    id: "3",
    title: "Youth Leadership Program",
    category: "Leadership",
    trainer: "Md. Karim",
    location: "Sylhet",
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    participants: 35,
    status: "completed",
  },
];

export default function TrainingManagementPage() {
  const [trainings, setTrainings] = useState<Training[]>(initialTrainings);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  const [editingTraining, setEditingTraining] = useState<Training | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    trainer: "",
    location: "",
    startDate: "",
    endDate: "",
    participants: "",
    status: "upcoming" as TrainingStatus,
  });

  const filteredTrainings = useMemo(() => {
    return trainings.filter((training) => {
      const matchSearch =
        training.title.toLowerCase().includes(search.toLowerCase()) ||
        training.category.toLowerCase().includes(search.toLowerCase()) ||
        training.trainer.toLowerCase().includes(search.toLowerCase()) ||
        training.location.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "all" || training.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [trainings, search, statusFilter]);

  const handleAdd = () => {
    setEditingTraining(null);
    setFormData({
      title: "",
      category: "",
      trainer: "",
      location: "",
      startDate: "",
      endDate: "",
      participants: "",
      status: "upcoming",
    });
    setOpenModal(true);
  };

  const handleEdit = (training: Training) => {
    setEditingTraining(training);
    setFormData({
      title: training.title,
      category: training.category,
      trainer: training.trainer,
      location: training.location,
      startDate: training.startDate,
      endDate: training.endDate,
      participants: String(training.participants),
      status: training.status,
    });
    setOpenModal(true);
  };

  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.category ||
      !formData.trainer ||
      !formData.location ||
      !formData.startDate ||
      !formData.endDate
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editingTraining) {
      setTrainings((prev) =>
        prev.map((training) =>
          training.id === editingTraining.id
            ? {
                ...training,
                ...formData,
                participants: Number(formData.participants || 0),
              }
            : training,
        ),
      );
    } else {
      setTrainings((prev) => [
        {
          id: Date.now().toString(),
          ...formData,
          participants: Number(formData.participants || 0),
        },
        ...prev,
      ]);
    }

    setOpenModal(false);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this training?")) return;
    setTrainings((prev) => prev.filter((training) => training.id !== id));
  };

  const statusClass: Record<TrainingStatus, string> = {
    upcoming: "bg-sky-100 text-sky-700",
    running: "bg-green-100 text-green-700",
    completed: "bg-orange-100 text-orange-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="w-full space-y-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="relative bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 p-6 md:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-red-500/25" />
            <div className="absolute bottom-0 right-28 h-20 w-20 rounded-t-full bg-orange-300/30" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-lg">
                  <BookOpen className="h-7 w-7" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-white md:text-3xl">
                    Training Management
                  </h1>
                  <p className="mt-1 text-sm text-white/90">
                    Manage training programs, trainers, participants and status.
                  </p>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-sky-700 shadow-lg transition hover:bg-slate-100"
              >
                <Plus className="h-4 w-4" />
                Add Training
              </button>
            </div>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-4">
            <Stats
              title="Total Training"
              value={trainings.length}
              color="text-sky-600"
            />
            <Stats
              title="Running"
              value={
                trainings.filter((item) => item.status === "running").length
              }
              color="text-green-600"
            />
            <Stats
              title="Upcoming"
              value={
                trainings.filter((item) => item.status === "upcoming").length
              }
              color="text-orange-500"
            />
            <Stats
              title="Participants"
              value={trainings.reduce(
                (sum, item) => sum + item.participants,
                0,
              )}
              color="text-red-500"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search training, category, trainer or location..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {filteredTrainings.map((training) => (
            <div
              key={training.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500" />

              <div className="space-y-5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass[training.status]}`}
                    >
                      {training.status}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {training.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-sky-600">
                      {training.category}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button className="rounded-lg bg-sky-50 p-2 text-sky-600 hover:bg-sky-600 hover:text-white">
                      <Eye className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleEdit(training)}
                      className="rounded-lg bg-orange-50 p-2 text-orange-600 hover:bg-orange-500 hover:text-white"
                    >
                      <Edit className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(training.id)}
                      className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 text-sm text-slate-600">
                  <Info
                    icon={<Users className="h-4 w-4" />}
                    label="Trainer"
                    value={training.trainer}
                  />
                  <Info
                    icon={<MapPin className="h-4 w-4" />}
                    label="Location"
                    value={training.location}
                  />
                  <Info
                    icon={<CalendarDays className="h-4 w-4" />}
                    label="Duration"
                    value={`${training.startDate} to ${training.endDate}`}
                  />
                  <Info
                    icon={<Users className="h-4 w-4" />}
                    label="Participants"
                    value={`${training.participants} People`}
                  />
                </div>
              </div>
            </div>
          ))}

          {filteredTrainings.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center xl:col-span-3">
              <BookOpen className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-800">
                No training found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or add a new training program.
              </p>
            </div>
          )}
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {editingTraining ? "Edit Training" : "Add New Training"}
                </h2>
                <p className="text-sm text-slate-500">
                  Fill training information below.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-red-100 hover:text-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-2">
              <Input
                label="Training Title"
                value={formData.title}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, title: value }))
                }
              />

              <Input
                label="Category"
                value={formData.category}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, category: value }))
                }
              />

              <Input
                label="Trainer"
                value={formData.trainer}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, trainer: value }))
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
                label="Start Date"
                type="date"
                value={formData.startDate}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, startDate: value }))
                }
              />

              <Input
                label="End Date"
                type="date"
                value={formData.endDate}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, endDate: value }))
                }
              />

              <Input
                label="Participants"
                type="number"
                value={formData.participants}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, participants: value }))
                }
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.value as TrainingStatus,
                    }))
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="running">Running</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 p-5">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="rounded-xl bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90"
              >
                {editingTraining ? "Update Training" : "Create Training"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stats({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-500">{title}</p>
      <h2 className={`mt-2 text-3xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-slate-400">{label}</p>
        <p className="font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />
    </div>
  );
}
