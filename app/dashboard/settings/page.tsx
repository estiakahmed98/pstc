"use client";

import { useState } from "react";
import {
  Bell,
  Building2,
  Globe,
  Lock,
  Mail,
  Palette,
  Save,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    organizationName: "PSTC",
    websiteTitle: "PSTC Website",
    email: "info@pstc.org",
    phone: "+880 1234-567890",
    address: "Dhaka, Bangladesh",
    language: "English",
    timezone: "Asia/Dhaka",
    primaryColor: "#1D9FE3",
    emailNotification: true,
    smsNotification: false,
    maintenanceMode: false,
    twoFactorAuth: true,
  });

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="w-full space-y-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="relative bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 p-6 md:p-8">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-red-500/25" />
            <div className="absolute bottom-0 right-32 h-20 w-20 rounded-t-full bg-orange-300/30" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-lg">
                  <Settings className="h-7 w-7" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-white md:text-3xl">
                    Settings
                  </h1>
                  <p className="mt-1 text-sm text-white/90">
                    Manage organization profile, system preferences and
                    security.
                  </p>
                </div>
              </div>

              <button
                onClick={handleSave}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-sky-700 shadow-lg hover:bg-slate-100"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <SettingsCard
            title="Organization Profile"
            description="Basic organization and contact information."
            icon={<Building2 className="h-5 w-5" />}
            color="text-sky-600"
          >
            <Input
              label="Organization Name"
              value={formData.organizationName}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, organizationName: value }))
              }
            />

            <Input
              label="Website Title"
              value={formData.websiteTitle}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, websiteTitle: value }))
              }
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, email: value }))
              }
            />

            <Input
              label="Phone Number"
              value={formData.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value }))
              }
            />

            <Input
              label="Address"
              value={formData.address}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, address: value }))
              }
            />
          </SettingsCard>

          <SettingsCard
            title="System Preferences"
            description="Language, timezone and website behavior."
            icon={<Globe className="h-5 w-5" />}
            color="text-green-600"
          >
            <Select
              label="Language"
              value={formData.language}
              options={["English", "Bangla", "Arabic"]}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, language: value }))
              }
            />

            <Select
              label="Timezone"
              value={formData.timezone}
              options={["Asia/Dhaka", "Asia/Kolkata", "UTC", "Asia/Dubai"]}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, timezone: value }))
              }
            />

            <Input
              label="Primary Color"
              type="color"
              value={formData.primaryColor}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, primaryColor: value }))
              }
            />

            <Toggle
              title="Maintenance Mode"
              description="Temporarily disable public website access."
              checked={formData.maintenanceMode}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, maintenanceMode: value }))
              }
            />
          </SettingsCard>

          <SettingsCard
            title="Notification Settings"
            description="Control email and SMS alerts."
            icon={<Bell className="h-5 w-5" />}
            color="text-orange-600"
          >
            <Toggle
              title="Email Notification"
              description="Receive important updates through email."
              checked={formData.emailNotification}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, emailNotification: value }))
              }
            />

            <Toggle
              title="SMS Notification"
              description="Receive urgent alerts through SMS."
              checked={formData.smsNotification}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, smsNotification: value }))
              }
            />

            <div className="rounded-2xl bg-orange-50 p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-bold text-slate-800">Email Status</p>
                  <p className="text-sm text-slate-500">Connected and active</p>
                </div>
              </div>
            </div>
          </SettingsCard>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <SettingsCard
            title="Security Settings"
            description="Manage authentication and account protection."
            icon={<ShieldCheck className="h-5 w-5" />}
            color="text-red-600"
          >
            <Toggle
              title="Two Factor Authentication"
              description="Add extra security during login."
              checked={formData.twoFactorAuth}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, twoFactorAuth: value }))
              }
            />

            <Input
              label="Current Password"
              type="password"
              value=""
              onChange={() => {}}
            />
            <Input
              label="New Password"
              type="password"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Confirm Password"
              type="password"
              value=""
              onChange={() => {}}
            />

            <button className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">
              Update Password
            </button>
          </SettingsCard>

          <SettingsCard
            title="Theme Preview"
            description="PSTC logo color-based dashboard theme."
            icon={<Palette className="h-5 w-5" />}
            color="text-sky-600"
          >
            <div className="grid gap-4 md:grid-cols-4">
              <ColorBox label="Blue" color="bg-sky-500" />
              <ColorBox label="Red" color="bg-red-500" />
              <ColorBox label="Green" color="bg-green-500" />
              <ColorBox label="Orange" color="bg-orange-500" />
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600">
                  <User className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">PSTC Dashboard</h3>
                  <p className="text-sm text-white/90">
                    Working for population & development
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-bold text-slate-800">System Status</p>
                  <p className="text-sm text-slate-500">
                    All settings are configured properly.
                  </p>
                </div>
              </div>
            </div>
          </SettingsCard>
        </div>
      </div>
    </div>
  );
}

function SettingsCard({
  title,
  description,
  icon,
  color,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 ${color}`}
        >
          {icon}
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>

      <div className="space-y-5">{children}</div>
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
        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
      />
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function Toggle({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
      <div>
        <p className="font-bold text-slate-800">{title}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>

      <button
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 rounded-full transition ${
          checked ? "bg-green-500" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function ColorBox({ label, color }: { label: string; color: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
      <div className={`mx-auto mb-3 h-10 w-10 rounded-xl ${color}`} />
      <p className="text-sm font-bold text-slate-700">{label}</p>
    </div>
  );
}
