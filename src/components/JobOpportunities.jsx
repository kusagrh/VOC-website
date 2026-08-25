import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import jobs from "../data/jobs.json";
import RevealOnScroll from "./ui/RevealOnScroll";
import TiltCard from "./ui/TiltCard";

const PAGE_SIZE = 9;

function JobCard({ job }) {
  const isActive = job.status === "Active";

  return (
    <TiltCard maxTilt={4} className="h-full rounded-2xl">
      <div className="flex h-full flex-col rounded-2xl border border-ink-line bg-ink-panel p-6 transition-colors hover:border-teal/40">

        {/* Job Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-violet/20 text-teal">
              <Briefcase size={18} />
            </div>

            <h3 className="font-display text-base font-semibold text-text-soft">
              {job.title}
            </h3>

            <p className="mt-1 text-xs text-text-muted">
              {job.department} · {job.type}
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${
              isActive
                ? "bg-teal/15 text-teal"
                : "bg-text-muted/15 text-text-muted"
            }`}
          >
            {job.status}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
          {job.description}
        </p>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {job.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-ink-line px-2.5 py-1 font-mono text-[10px] text-text-muted"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="mt-5 space-y-2 border-t border-ink-line pt-4 text-xs text-text-muted">
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-teal" />
            {job.location} · {job.mode}
          </span>

          <span className="flex items-center gap-2">
            <Clock size={13} className="text-violet" />
            {job.duration}
          </span>
        </div>

        {/* Apply */}
        <a
          href={isActive ? job.applyLink : undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!isActive}
          onClick={(e) => {
            if (!isActive) e.preventDefault();
          }}
          className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
            isActive
              ? "bg-gradient-to-r from-teal to-violet text-ink hover:scale-[1.02]"
              : "cursor-not-allowed border border-ink-line text-text-muted"
          }`}
        >
          {isActive ? "Apply Now" : "Closed"}

          {isActive && <ExternalLink size={14} />}
        </a>
      </div>
    </TiltCard>
  );
}

export default function JobOpportunities({
  id = "jobs",
  showHeader = true,
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [mode, setMode] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const modes = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.mode))],
    []
  );

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(q)
        );

      const matchesType =
        type === "All" || job.type === type;

      const matchesMode =
        mode === "All" || job.mode === mode;

      return matchesQuery && matchesType && matchesMode;
    });
  }, [query, type, mode]);

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  const activeCount = jobs.filter(
    (job) => job.status === "Active"
  ).length;

  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-ink-line bg-ink-soft py-24 md:py-32"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />

      <div className="container-vc relative">

        {/* Header */}
        {showHeader && (
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-panel px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-teal">
              <Briefcase size={14} />
              VaultHire Opportunities
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold text-text-soft md:text-5xl">
              Jobs &amp; internships, all in one place.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Find your next opportunity from companies hiring through the
              VaultofCodes talent network.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-ink-line bg-ink-panel px-4 py-2 text-sm text-text-muted">
                <strong className="text-text-soft">
                  {activeCount}+
                </strong>{" "}
                active opportunities
              </span>

              <span className="rounded-full border border-ink-line bg-ink-panel px-4 py-2 text-sm text-text-muted">
                Jobs + Internships
              </span>

              <span className="rounded-full border border-ink-line bg-ink-panel px-4 py-2 text-sm text-text-muted">
                Remote + Hybrid + On-site
              </span>
            </div>
          </RevealOnScroll>
        )}

        {/* Search / Filters */}
        <RevealOnScroll className="mt-12">
          <div className="rounded-2xl border border-ink-line bg-ink-panel/70 p-4 backdrop-blur md:p-5">
            <div className="flex flex-col gap-4 lg:flex-row">

              {/* Search */}
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  placeholder="Search jobs, skills, departments..."
                  className="w-full rounded-xl border border-ink-line bg-ink py-3 pl-11 pr-4 text-sm text-text-soft placeholder:text-text-muted focus:border-teal/50 focus:outline-none"
                />
              </div>

              {/* Job Type */}
              <div className="flex gap-2">
                {["All", "Job", "Internship"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setType(item);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      type === item
                        ? "border-teal bg-teal/15 text-teal"
                        : "border-ink-line text-text-muted hover:border-teal/40 hover:text-text-soft"
                    }`}
                  >
                    {item === "All" ? "All Roles" : `${item}s`}
                  </button>
                ))}
              </div>

              {/* Mode */}
              <select
                value={mode}
                onChange={(e) => {
                  setMode(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                className="rounded-full border border-ink-line bg-ink px-4 py-2.5 text-sm text-text-soft focus:border-teal/50 focus:outline-none"
              >
                {modes.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All Modes" : item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </RevealOnScroll>

        {/* Results */}
        <p className="mt-6 text-sm text-text-muted">
          Showing{" "}
          <span className="text-text-soft">
            {visibleJobs.length}
          </span>{" "}
          of{" "}
          <span className="text-text-soft">
            {filteredJobs.length}
          </span>{" "}
          opportunities
        </p>

        {/* Cards */}
        {visibleJobs.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-ink-line bg-ink-panel p-12 text-center">
            <Briefcase
              size={30}
              className="mx-auto text-text-muted"
            />

            <h3 className="mt-4 font-display text-lg font-semibold text-text-soft">
              No opportunities found
            </h3>

            <p className="mt-2 text-sm text-text-muted">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleJobs.map((job, i) => (
              <RevealOnScroll
                key={job.id}
                delay={(i % 3) * 0.06}
              >
                <JobCard job={job} />
              </RevealOnScroll>
            ))}
          </div>
        )}

        {/* More */}
        {visibleCount < filteredJobs.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() =>
                setVisibleCount((count) => count + PAGE_SIZE)
              }
              className="group inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-panel px-6 py-3 text-sm font-semibold text-text-soft transition-all hover:border-teal/50 hover:text-teal"
            >
              Show More Opportunities
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}