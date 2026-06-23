"use client";

import { useMemo, useState } from "react";
import {
  Search,
  UserPlus,
  Users,
  ShieldCheck,
  UserCheck,
  UserX,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { users } from "@/lib/data/users";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase());

      const matchRole = roleFilter === "all" || user.role === roleFilter;
      const matchStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchSearch && matchRole && matchStatus;
    });
  }, [search, roleFilter, statusFilter]);

  const roles = ["all", ...Array.from(new Set(users.map((user) => user.role)))];

  const activeUsers = users.filter((user) => user.status === "active").length;
  const inactiveUsers = users.filter((user) => user.status !== "active").length;

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="w-full space-y-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="relative bg-linear-to-r from-sky-500 via-green-500 to-orange-500 p-6 md:p-8">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-red-500/25" />
            <div className="absolute bottom-0 right-32 h-20 w-20 rounded-t-full bg-orange-300/30" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-lg">
                  <Users className="h-7 w-7" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-white md:text-3xl">
                    Users & Roles
                  </h1>
                  <p className="mt-1 text-sm text-white/90">
                    Manage users, roles, account status and permissions.
                  </p>
                </div>
              </div>

              <Button className="gap-2 rounded-xl bg-white font-bold text-sky-700 shadow-lg hover:bg-slate-100">
                <UserPlus className="h-4 w-4" />
                Add User
              </Button>
            </div>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-4">
            <StatsCard
              title="Total Users"
              value={users.length}
              icon={<Users className="h-5 w-5" />}
              color="text-sky-600"
              bg="bg-sky-50"
            />
            <StatsCard
              title="Active Users"
              value={activeUsers}
              icon={<UserCheck className="h-5 w-5" />}
              color="text-green-600"
              bg="bg-green-50"
            />
            <StatsCard
              title="Inactive Users"
              value={inactiveUsers}
              icon={<UserX className="h-5 w-5" />}
              color="text-red-600"
              bg="bg-red-50"
            />
            <StatsCard
              title="Total Roles"
              value={roles.length - 1}
              icon={<ShieldCheck className="h-5 w-5" />}
              color="text-orange-600"
              bg="bg-orange-50"
            />
          </div>
        </div>

        <Card className="rounded-3xl border-slate-200 p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_220px_220px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search user, email or role..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role === "all" ? "All Roles" : role}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
        </Card>

        <Card className="overflow-hidden rounded-3xl border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 text-sm text-slate-600">
                  <th className="px-6 py-4 text-left font-bold">User</th>
                  <th className="px-6 py-4 text-left font-bold">Email</th>
                  <th className="px-6 py-4 text-left font-bold">Role</th>
                  <th className="px-6 py-4 text-left font-bold">Status</th>
                  <th className="px-6 py-4 text-left font-bold">Permission</th>
                  <th className="px-6 py-4 text-right font-bold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-sm font-bold text-white">
                          {user.name
                            .split(" ")
                            .map((item) => item[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <p className="font-bold text-slate-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            ID: {user.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      <Badge
                        variant="outline"
                        className="border-sky-200 bg-sky-50 font-semibold text-sky-700"
                      >
                        {user.role}
                      </Badge>
                    </td>

                    <td className="px-6 py-4">
                      <Badge
                        className={
                          user.status === "active"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-red-100 text-red-700 hover:bg-red-100"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        Role Based Access
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9 rounded-xl hover:bg-sky-600 hover:text-white"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9 rounded-xl hover:bg-orange-500 hover:text-white"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9 rounded-xl hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9 rounded-xl"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center">
                      <Users className="mx-auto h-12 w-12 text-slate-300" />
                      <h3 className="mt-4 text-lg font-bold text-slate-800">
                        No users found
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Try changing your search or filter options.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  color,
  bg,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  bg: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <h2 className={`mt-2 text-3xl font-bold ${color}`}>{value}</h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg} ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
