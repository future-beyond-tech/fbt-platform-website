"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const TOC_ITEMS = [
  { id: "executive-summary", label: "Executive Summary" },
  { id: "risk-management-plan", label: "Risk Management Plan" },
  { id: "risk-management-file", label: "Risk Management File" },
  { id: "risk-analysis", label: "Risk Analysis" },
  { id: "risk-evaluation", label: "Risk Evaluation" },
  { id: "risk-control", label: "Risk Control" },
  { id: "implementation-verification", label: "Implementation & Verification" },
  { id: "residual-risk-analysis", label: "Residual Risk Analysis" },
  { id: "risk-benefit-analysis", label: "Risk-Benefit Analysis" },
  { id: "overall-residual-risk", label: "Overall Residual Risk" },
  { id: "risk-management-report", label: "Risk Management Report" },
  { id: "standards-comparison", label: "Standards Comparison" },
  { id: "device-applications", label: "Device Applications" },
  { id: "post-market-surveillance", label: "Post-Market Surveillance" },
  { id: "implementation-practices", label: "Implementation Practices" },
  { id: "references", label: "References" },
];

/** Reading progress bar */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height ? Math.min((winScroll / height) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-slate-200 dark:bg-slate-800">
      <div
        className="h-full bg-amber-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function Expandable({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-700/80 dark:bg-slate-900/50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full min-h-[48px] touch-manipulation select-none items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 sm:px-6"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 dark:text-slate-100">{title}</span>
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-transform dark:bg-slate-800",
            open && "rotate-180"
          )}
          aria-hidden
        >
          <svg className="h-5 w-5 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-200 px-5 py-5 dark:border-slate-700 sm:px-6 sm:py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Section icon components (SVG) */
const SectionIcons = {
  summary: (
    <svg className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  plan: (
    <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  ),
  chart: (
    <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  shield: (
    <svg className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  document: (
    <svg className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
};

/** Key takeaway callout */
function KeyTakeaway({
  title,
  children,
  variant = "blue",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "blue" | "amber" | "red" | "emerald";
}) {
  const styles = {
    blue: "border-blue-500/50 bg-blue-50/80 dark:bg-blue-950/30 dark:border-blue-500/30",
    amber: "border-amber-500/50 bg-amber-50/80 dark:bg-amber-950/30 dark:border-amber-500/30",
    red: "border-red-500/50 bg-red-50/80 dark:bg-red-950/30 dark:border-red-500/30",
    emerald: "border-emerald-500/50 bg-emerald-50/80 dark:bg-emerald-950/30 dark:border-emerald-500/30",
  };
  return (
    <div className={cn("rounded-2xl border-l-4 p-5 sm:p-6", styles[variant])}>
      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  );
}

function FlowNode({
  label,
  variant = "blue",
}: {
  label: string;
  variant?: "blue" | "purple" | "amber" | "green" | "red" | "slate";
}) {
  const styles = {
    blue: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/50 dark:border-blue-700 dark:text-blue-100",
    purple: "bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-950/50 dark:border-purple-700 dark:text-purple-100",
    amber: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/50 dark:border-amber-700 dark:text-amber-100",
    green: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/50 dark:border-emerald-700 dark:text-emerald-100",
    red: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/50 dark:border-red-700 dark:text-red-100",
    slate: "bg-slate-100 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100",
  };
  return (
    <div
      className={cn(
        "rounded-xl border-2 px-4 py-3 text-center text-sm font-semibold shadow-sm",
        styles[variant]
      )}
    >
      {label}
    </div>
  );
}

function RiskAnalysisFlow() {
  const steps = [
    { label: "Risk Analysis Process Planning", variant: "blue" as const },
    { label: "Intended Use Characterization", variant: "purple" as const },
    { label: "Reasonably Foreseeable Misuse", variant: "amber" as const },
    { label: "Safety-Related Characteristics", variant: "green" as const },
    { label: "Hazard Identification", variant: "red" as const },
    { label: "Risk Estimation", variant: "slate" as const },
  ];
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-slate-700/80 dark:bg-slate-900/30 md:p-8">
      <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Process flow
      </p>
      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <FlowNode label={step.label} variant={step.variant} />
            {i < steps.length - 1 && (
              <div className="hidden flex-shrink-0 sm:flex sm:flex-col sm:items-center">
                <svg className="h-6 w-6 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskControlHierarchy() {
  const levels = [
    { n: 1, title: "Inherent Safety by Design", desc: "Modify design to eliminate hazards or reduce risks intrinsically.", examples: ["Biocompatible materials", "Reduced energy levels", "Fail-safe architectures"], color: "emerald" as const },
    { n: 2, title: "Protective Measures", desc: "Add safety features to device or manufacturing process.", examples: ["Physical guards", "Safety interlocks", "Alarms and automatic shutdown"], color: "blue" as const },
    { n: 3, title: "Information for Safety", desc: "Warnings, precautions, contraindications, training.", examples: ["Labeling", "Instructions for use", "User training"], color: "amber" as const },
  ];
  const colorMap = {
    emerald: "from-emerald-50 to-emerald-100/80 border-emerald-200 dark:from-emerald-950/40 dark:to-emerald-900/20 dark:border-emerald-800",
    blue: "from-blue-50 to-blue-100/80 border-blue-200 dark:from-blue-950/40 dark:to-blue-900/20 dark:border-blue-800",
    amber: "from-amber-50 to-amber-100/80 border-amber-200 dark:from-amber-950/40 dark:to-amber-900/20 dark:border-amber-800",
  };
  return (
    <div className="grid gap-6 py-6 sm:grid-cols-3">
      {levels.map((level) => (
        <div
          key={level.n}
          className={cn(
            "rounded-2xl border bg-gradient-to-br p-6 shadow-sm",
            colorMap[level.color]
          )}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white dark:bg-slate-100 dark:text-slate-900">
            {level.n}
          </div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100">{level.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{level.desc}</p>
          <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400">
            {level.examples.map((ex) => (
              <li key={ex} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {ex}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function IconCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900/50 dark:hover:border-slate-600">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
        {icon}
      </div>
      <h5 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h5>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
    </div>
  );
}

/** Section wrapper with optional number and icon */
function Section({
  id,
  number,
  icon,
  title,
  children,
  className,
}: {
  id: string;
  number?: string;
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 md:py-20",
        className
      )}
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {number && (
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            {number}
          </span>
        )}
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <h2 className="font-tiempos text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

export default function Iso14971Content() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const sections = TOC_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  return (
    <>
      <ReadingProgress />

      {/* Mobile TOC */}
      <button
        type="button"
        onClick={() => setTocOpen(true)}
        className="fixed left-4 top-5 z-40 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900 xl:hidden"
        aria-label="Open contents"
      >
        <svg className="h-5 w-5 text-slate-700 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {tocOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 xl:hidden"
          onClick={() => setTocOpen(false)}
          aria-hidden
        />
      )}

      {/* Side TOC - visible only xl and up to avoid overlap */}
      <nav
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 overflow-y-auto border-r border-slate-200 bg-white/95 pb-24 pt-20 backdrop-blur-sm transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950/95 xl:pt-24",
          tocOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        )}
        aria-label="Page contents"
      >
        <div className="px-4 py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            On this page
          </h2>
          <ul className="space-y-0.5">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "block w-full rounded-lg border-l-2 py-2.5 pl-3 pr-2 text-left text-sm transition-colors",
                    activeId === item.id
                      ? "border-amber-500 bg-amber-50/80 font-medium text-slate-900 dark:bg-amber-950/50 dark:text-slate-100"
                      : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-100"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main content - no left margin on small screens; xl: margin for sidebar */}
      <div className="min-h-screen pt-14 xl:pl-64">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='g' width='12' height='12' patternUnits='userSpaceOnUse'%3E%3Cpath d='M12 0L0 0 0 12' fill='none' stroke='white' stroke-width='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23g)'/%3E%3C/svg%3E")`,
            }}
          />
          <Container>
            <div className="relative mx-auto max-w-5xl">
              <span className="inline-block rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200">
                Deep Research
              </span>
              <h1 className="mt-6 font-tiempos text-4xl font-bold italic leading-tight text-white sm:text-5xl lg:text-6xl">
                Medical Device Risk Management
                <br />
                <span className="text-amber-200">per ISO 14971</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                A comprehensive analysis of the international standard for systematic risk
                management throughout the entire lifecycle of medical devices, including IVDs,
                SaMD, and active implantables.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {[
                  { label: "ISO 14971:2019", sub: "Mandatory benefit-risk, post-market focus" },
                  { label: "Regulatory alignment", sub: "EU MDR/IVDR, FDA QMSR" },
                  { label: "Device-specific", sub: "IVD, SaMD, implantables" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Article body - constrained width for reading */}
        <div className="bg-slate-50/50 dark:bg-slate-950/50">
          <Container>
            <article className="mx-auto max-w-4xl py-12 md:py-16">
              {/* Executive Summary */}
              <Section id="executive-summary" number="01" icon={SectionIcons.summary} title="Executive Summary">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  ISO 14971:2019 establishes the international framework for systematic risk
                  management throughout the medical device lifecycle, encompassing in vitro
                  diagnostics (IVDs), software as a medical device (SaMD), active implantables,
                  and combination products.
                </p>
                <KeyTakeaway title="2019 revision emphasis" variant="blue">
                  The 2019 revision places substantially enhanced emphasis on benefit-risk
                  analysis, expands requirements for production and post-production activities,
                  and achieves stronger alignment with major regulatory frameworks worldwide.
                </KeyTakeaway>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">Update Area</th>
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">2007</th>
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">2019</th>
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Benefit-risk analysis", "Implicit", "Mandatory for residual risks", "MDR/IVDR alignment"],
                          ["Overall residual risk", "Recommended", "Mandatory in RMP", "Aggregate assessment"],
                          ["Post-market surveillance", "General", "Clause 10 structured", "Lifecycle focus"],
                        ].map((row, i) => (
                          <tr key={i} className={cn("border-b border-slate-100 dark:border-slate-800", i % 2 === 1 && "bg-slate-50/50 dark:bg-slate-800/30")}>
                            <td className="p-4 font-medium">{row[0]}</td>
                            <td className="p-4 text-slate-600 dark:text-slate-400">{row[1]}</td>
                            <td className="p-4 text-slate-700 dark:text-slate-300">{row[2]}</td>
                            <td className="p-4 text-slate-600 dark:text-slate-400">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Risk Management Plan */}
              <Section id="risk-management-plan" number="02" icon={SectionIcons.plan} title="Risk Management Plan (RMP)">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  The RMP is the foundational strategic document. ISO 14971:2019 Clause 4.4
                  mandates that manufacturers establish this plan at the outset, tailored to the
                  device and organization.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { title: "Scope of Activities", desc: "Boundaries, device coverage, lifecycle phases, risk types." },
                    { title: "Responsibilities", desc: "Allocation to qualified personnel and competencies." },
                    { title: "Review Requirements", desc: "Scheduled reviews and triggering events." },
                    { title: "Acceptability Criteria", desc: "Objective, predefined criteria before evaluation." },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/50"
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{card.title}</h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <Expandable title="IVD Risk Management Plans" defaultOpen={false}>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    IVD plans must address pre-analytical, analytical, and post-analytical
                    variables. For companion diagnostics, address risks related to patient
                    selection and false positive/negative consequences.
                  </p>
                </Expandable>
                <Expandable title="SaMD Risk Management Plans" defaultOpen={false}>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    SaMD plans must address updates, algorithmic complexity, and cybersecurity;
                    criteria for defects, data quality, interoperability, and AI/ML risks.
                    Integration with IEC 62304 and IEC 81001-5-1 is required.
                  </p>
                </Expandable>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Risk Management File */}
              <Section id="risk-management-file" number="03" icon={SectionIcons.document} title="Risk Management File (RMF)">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  The RMF is the comprehensive repository of all records and documentation,
                  providing objective evidence that risk management has been planned, executed,
                  and verified per ISO 14971:2019.
                </p>
                <KeyTakeaway title="Living document" variant="amber">
                  The RMF is dynamic and must be updated in response to design changes, new
                  hazard information, post-market surveillance findings, and corrective actions.
                </KeyTakeaway>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">Content</th>
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Intended Use", "Purpose, users, environment, patients"],
                          ["Risk Acceptance Criteria", "Policy and product-specific criteria"],
                          ["Risk Analysis", "Hazards, causes, situations, harm, probability, severity"],
                          ["Risk Control", "Measures and evidence of implementation"],
                          ["Risk Management Report", "Benefit-risk and plan compliance"],
                        ].map((row, i) => (
                          <tr key={i} className={cn("border-b border-slate-100 dark:border-slate-800", i % 2 === 1 && "bg-slate-50/50 dark:bg-slate-800/30")}>
                            <td className="p-4 font-medium">{row[0]}</td>
                            <td className="p-4 text-slate-600 dark:text-slate-400">{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Risk Analysis */}
              <Section id="risk-analysis" number="04" icon={SectionIcons.chart} title="Risk Analysis">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Risk analysis encompasses intended use, reasonably foreseeable misuse,
                  safety-related characteristics, hazard identification, and risk estimation.
                  Probability of harm can be qualitative, semi-quantitative, or quantitative.
                </p>
                <RiskAnalysisFlow />
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">Term</th>
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">Definition</th>
                          <th className="border-b border-slate-200 p-4 font-semibold dark:border-slate-700">Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-semibold text-blue-700 dark:text-blue-300">Hazard</td><td className="p-4">Potential source of harm</td><td className="p-4">Electrical energy in power supply</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-semibold text-emerald-700 dark:text-emerald-300">Hazardous Situation</td><td className="p-4">Exposure to one or more hazards</td><td className="p-4">User contacts live conductor during maintenance</td></tr>
                        <tr><td className="p-4 font-semibold text-red-700 dark:text-red-300">Harm</td><td className="p-4">Physical injury or damage</td><td className="p-4">Electric shock, cardiac arrest</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <IconCard icon={SectionIcons.document} title="IVD Analysis" subtitle="Analytical vs. Clinical Performance" />
                  <IconCard icon={SectionIcons.chart} title="SaMD Analysis" subtitle="AI/ML-Specific Considerations" />
                  <IconCard icon={SectionIcons.shield} title="Active Implantables" subtitle="Long-term Risk Assessment" />
                  <IconCard icon={SectionIcons.summary} title="Combination Products" subtitle="Interface Risk Analysis" />
                </div>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Risk Evaluation */}
              <Section id="risk-evaluation" number="05" title="Risk Evaluation">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Risk evaluation compares estimated risks against acceptability criteria in the
                  RMP to determine whether risk control is required—the critical decision point
                  between analysis and control.
                </p>
                <KeyTakeaway title="ALARP vs. “As far as possible”" variant="amber">
                  ISO 14971 does not explicitly mandate ALARP. MDR/IVDR require reducing risks
                  “as far as possible” without qualification, which may imply a more stringent
                  interpretation than traditional ALARP.
                </KeyTakeaway>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Risk Control */}
              <Section id="risk-control" number="06" icon={SectionIcons.shield} title="Risk Control">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  ISO 14971:2019 establishes a mandatory hierarchy for risk control options.
                  Manufacturers must document that each level has been considered before the next.
                </p>
                <KeyTakeaway title="Mandatory hierarchy (Clause 7.1)" variant="red">
                  The sequence is mandatory. Document consideration at each level before moving
                  to the next.
                </KeyTakeaway>
                <RiskControlHierarchy />
                <Expandable title="Risks from risk control measures (Clause 7.5)" defaultOpen={false}>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Identify and evaluate new risks introduced by controls: e.g. interlocks
                    (workarounds), alarms (fatigue), barriers (access, heat), software safety
                    (complexity, interactions).
                  </p>
                </Expandable>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Implementation and Verification */}
              <Section id="implementation-verification" number="07" title="Implementation and Verification">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Verification confirms that planned measures have been correctly incorporated;
                  effectiveness verification addresses whether the right controls achieve the
                  intended risk reduction.
                </p>
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    { title: "Inspection & documentation", desc: "Design docs, production samples, manufacturing records" },
                    { title: "Testing & validation", desc: "Bench testing, aging, fault injection, software verification" },
                    { title: "Clinical evaluation", desc: "Safety outcomes and usability testing" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm dark:border-slate-700/80 dark:bg-slate-900/50">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Residual Risk */}
              <Section id="residual-risk-analysis" number="08" title="Residual Risk Analysis">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Clause 7.3 requires residual risks to be evaluated against RMP criteria. Each
                  must be documented; individual risks are aggregated for overall residual risk
                  evaluation using a method defined in the plan.
                </p>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Risk-Benefit */}
              <Section id="risk-benefit-analysis" number="09" title="Risk-Benefit Analysis">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Clause 7.4 addresses benefit-risk analysis when residual risk is not acceptable
                  and further control is not practicable. Regulatory frameworks often require
                  benefit-risk for all risks. Methodology includes benefits, probability and
                  duration, and patient perspective and unmet need.
                </p>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Overall Residual Risk */}
              <Section id="overall-residual-risk" number="10" title="Overall Residual Risk Acceptability">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Clause 8 requires evaluation of overall residual risk using a method in the
                  RMP. Acceptable overall risk allows market proceed with surveillance;
                  unacceptable requires additional controls or design changes.
                </p>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Risk Management Report */}
              <Section id="risk-management-report" number="11" title="Risk Management Report">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  The report (Clause 9) must confirm plan implementation, justify overall
                  residual risk acceptability, and identify methods for post-production
                  information collection and review.
                </p>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Standards Comparison */}
              <Section id="standards-comparison" number="12" title="Comparison with Related Standards">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  ISO 14971 integrates with IEC 62366-1 (usability), FDA design controls and
                  benefit-risk guidance, and MDR/IVDR GSPRs. EN ISO 14971:2019+A11:2021 Annexes
                  ZA/ZB map requirements and gaps.
                </p>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Device Applications */}
              <Section id="device-applications" number="13" title="Device Type Applications">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Risk management is adapted for IVDs, SaMD (IMDRF, AI/ML), active implantables,
                  and combination products (interface risks).
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <IconCard icon={SectionIcons.document} title="IVD" subtitle="Analytical & Clinical Performance" />
                  <IconCard icon={SectionIcons.chart} title="SaMD" subtitle="AI/ML & Cybersecurity" />
                  <IconCard icon={SectionIcons.shield} title="Active Implantables" subtitle="Long-term Risk" />
                  <IconCard icon={SectionIcons.summary} title="Combination Products" subtitle="Interface Risk" />
                </div>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Post-Market */}
              <Section id="post-market-surveillance" number="14" title="Post-Market Surveillance">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Clause 10 defines production and post-production activities: collection and
                  review of production records, complaints, adverse events, field service,
                  literature; update of the RMF. Integration with CAPA and management review.
                  IVDR mandates PSUR for Class C and D IVDs.
                </p>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* Implementation Practices */}
              <Section id="implementation-practices" number="15" title="Implementation and Best Practices">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Effective implementation integrates risk management from concept through
                  post-market: preliminary hazard analysis, risk-based requirements, system
                  hazard analysis, design FMEA, verification, validation, and ongoing
                  surveillance. Cross-functional teams and tools (RMP templates, FMEA/FTA/HAZOP)
                  support traceability.
                </p>
              </Section>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

              {/* References */}
              <Section id="references" number="16" title="References and Regulatory Sources">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { title: "ISO 14971:2019 & ISO/TR 24971:2020", items: ["Application of risk management", "Guidance on ISO 14971"] },
                    { title: "IEC 62366-1, IEC 81001-5-1", items: ["Usability engineering", "SaMD security lifecycle"] },
                    { title: "EU MDR 2017/745, IVDR 2017/746", items: ["Medical devices", "In vitro diagnostics"] },
                    { title: "FDA Guidance", items: ["Benefit-risk, SaMD, cybersecurity", "Human factors"] },
                  ].map((block) => (
                    <div
                      key={block.title}
                      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/50"
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{block.title}</h4>
                      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600 dark:text-slate-400">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              {/* CTA */}
              <section className="pt-16 pb-8">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-14 text-center shadow-2xl dark:from-slate-950 dark:to-slate-900 md:px-12 md:py-16">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    Need Medical Device Risk Management Expertise?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-slate-300">
                    Our research informs our consulting. We help manufacturers implement
                    ISO 14971–aligned risk management and regulatory strategies.
                  </p>
                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-amber-400 active:scale-[0.98]"
                    >
                      Discuss Your Project
                    </Link>
                    <Link
                      href="/research"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-slate-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800 active:scale-[0.98]"
                    >
                      View All Research
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </Container>
        </div>
      </div>
    </>
  );
}
