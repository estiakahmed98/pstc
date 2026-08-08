import Link from "next/link";
import {
  ArrowUpRight,
  Eye,
  GripVertical,
  House,
  Image,
  LayoutTemplate,
  Newspaper,
  Pencil,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

const landingSections = [
  { name: "Hero Carousel", type: "Hero", icon: Image },
  { name: "Who We Are", type: "Content", icon: LayoutTemplate },
  { name: "What We Do", type: "Programs", icon: LayoutTemplate },
  { name: "NaYoN", type: "Youth engagement", icon: Users },
  { name: "Publications", type: "Dynamic content", icon: LayoutTemplate },
  { name: "Magazine Subscription", type: "Form", icon: Pencil },
  { name: "Latest News", type: "Dynamic content", icon: Newspaper },
  { name: "Our Partners", type: "Logo grid", icon: Users },
  { name: "Global Reach", type: "Map & statistics", icon: LayoutTemplate },
];

export default function LandingManagementPage() {
  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 md:p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryCard label="Total sections" value="9" color={PRIMARY} />
        <SummaryCard label="Visible sections" value="9" color={PRIMARY} />
        <SummaryCard label="Hidden sections" value="0" color={SECONDARY} />
      </div>

      <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-2 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-black text-slate-900">
              Homepage sections
            </h2>
            <p className="text-sm text-slate-500">
              Current sections are shown in their public display order.
            </p>
          </div>
          <span className="w-fit rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
            Content controls coming with CMS schema
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {landingSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.name}
                className="flex items-center gap-3 p-4 transition hover:bg-slate-50 sm:gap-4 sm:px-5"
              >
                <GripVertical className="h-5 w-5 shrink-0 text-slate-300" />
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: PRIMARY }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-slate-900">
                    {index + 1}. {section.name}
                  </p>
                  <p className="text-xs text-slate-500">{section.type}</p>
                </div>
                <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 sm:inline-flex">
                  Visible
                </span>
                <button
                  type="button"
                  disabled
                  title="Available after CMS schema implementation"
                  className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-400 disabled:cursor-not-allowed"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-black" style={{ color }}>
        {value}
      </p>
    </Card>
  );
}
