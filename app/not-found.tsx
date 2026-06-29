"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Construction,
  Home,
  Mail,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import HeaderMegaMenu from "@/components/landing/HeaderMegaMenu";
import Footer from "@/components/landing/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export default function NotFound() {
  return (
    <>
      <HeaderMegaMenu />

      <main className="relative min-h-[calc(100svh-82px)] overflow-hidden bg-black text-white lg:min-h-[calc(100svh-86px)]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/under_construction.jpg"
            alt="Under construction"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Accent Glow */}
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--pstc-primary)]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[var(--pstc-secondary)]/15 blur-3xl" />

        {/* Hanging Under Construction Card - Desktop */}
        <div className="pointer-events-none absolute right-5 top-0 z-20 hidden h-[30svh] w-[220px] sm:block lg:right-12 xl:right-20">
          {/* Rope */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-primary/50 to-transparent"
          />

          {/* Rope Joint */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.85 }}
            className="absolute left-1/2 top-[calc(30svh-10px)] z-10 size-5 -translate-x-1/2 rounded-full border border-primary/40 bg-primary shadow-xl shadow-primary/40"
          />

          {/* Hanging Card */}
          <motion.div
            initial={{ opacity: 0, y: -40, rotate: -5 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [-3, 3, -2.5, 2.5, -3],
            }}
            transition={{
              opacity: { duration: 0.45, delay: 0.75 },
              y: { duration: 0.65, delay: 0.75, ease: "easeOut" },
              rotate: {
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              },
            }}
            style={{ transformOrigin: "50% -34px" }}
            className="absolute left-1/2 top-[30svh] w-full -translate-x-1/2 overflow-hidden rounded-[1.5rem] border border-primary/20 bg-card/95 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            {/* Top Strip */}
            <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

            <div className="p-5 text-center">
              <div className="mx-auto grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <Wrench className="size-5" />
              </div>

              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                Notice
              </p>

              <h3 className="mt-1 text-lg font-black text-primary">
                Under Construction
              </h3>

              <p className="mt-2 text-xs leading-5 text-primary/90">
                This page is currently being prepared.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0, rotate: [-1.5, 1.5, -1.5] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.4 },
            y: { duration: 0.5, delay: 0.4 },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            },
          }}
          className="pointer-events-none absolute right-4 top-6 z-20 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-right text-white shadow-xl backdrop-blur-xl sm:hidden"
        >
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
            Notice
          </p>
          <p className="mt-1 text-sm font-black">Under Construction</p>
        </motion.div>

        {/* Content */}
        <section className="relative z-10 mx-auto flex min-h-[calc(100svh-82px)] items-end px-4 py-12 sm:px-6 lg:min-h-[calc(100svh-86px)] lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="w-full max-w-2xl"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-white shadow-lg shadow-black/20 backdrop-blur-xl"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Construction className="size-3.5 text-[var(--pstc-secondary)]" />
              </motion.span>
              Under Construction
              <span className="ml-1 flex gap-1">
                <span className="animate-pulse">·</span>
                <span className="animate-pulse delay-100">·</span>
                <span className="animate-pulse delay-200">·</span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              Page is being{" "}
              <span className="animate-[gradient_4s_ease_infinite] bg-gradient-to-r from-[var(--pstc-primary)] via-[var(--pstc-secondary)] to-[var(--pstc-primary)] bg-[length:200%_100%] bg-clip-text text-transparent">
                built
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
            >
              We're crafting something meaningful here. This section is
              currently under development and will soon be available with
              valuable content for our community.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[var(--pstc-primary)] px-7 text-sm font-black uppercase tracking-[0.04em] text-white shadow-lg shadow-[var(--pstc-primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--pstc-primary-dark)] hover:shadow-xl hover:shadow-[var(--pstc-primary)]/40"
              >
                <Home className="size-4 transition-transform group-hover:scale-110" />
                Back to Home
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact-us"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-black uppercase tracking-[0.04em] text-white shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pstc-secondary)] hover:bg-[var(--pstc-secondary)] hover:text-black"
              >
                <Mail className="size-4 transition-transform group-hover:scale-110" />
                Contact PSTC
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-[var(--pstc-secondary)]"
              >
                <ArrowLeft className="size-4" />
                Return to homepage
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--pstc-secondary)] to-transparent opacity-50" />
      </main>

      <Footer />
    </>
  );
}
