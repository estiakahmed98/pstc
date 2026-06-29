"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowLeft, LogIn, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_40%,#eef5f9_100%)] text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-900 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="relative overflow-hidden bg-[linear-gradient(135deg,#009FE3_0%,#0f172a_55%,#ea4335_100%)] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_24%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <div className="max-w-xl">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.24em]">
                  PSTC Admin
                </span>
                <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                  Admin login for the dashboard
                </h1>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
                  Access the management area to review pages, news,
                  publications, events, and other site content.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  Secure access
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  Content tools
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  Dashboard entry
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center p-8 sm:p-10 lg:p-12">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009FE3]/10 text-[#009FE3] dark:bg-[#ffd54f]/10 dark:text-[#ffd54f]">
                  <LogIn className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Sign in</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Use your admin credentials to continue.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                      placeholder="admin@pstc.org"
                      autoComplete="email"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Password
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <Lock className="h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                  </div>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#009FE3] px-5 py-4 text-sm font-black text-white transition hover:bg-[#0085c1] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[#ffd54f] dark:text-slate-950 dark:hover:bg-[#ffdf73]"
              >
                {submitting ? "Signing in..." : "Login to dashboard"}
              </button>

              <p className="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">
                Demo flow only. Any submitted credentials redirect to
                /dashboard.
                <br />
                <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block mt-1">
                  Email: admin@pstc.org | Password: admin123
                </span>
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
