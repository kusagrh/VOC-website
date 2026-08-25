import React, { useState } from "react";
import { Terminal, Mail, Lock, Eye, EyeOff, ArrowRight, Github } from "lucide-react";
import AuroraBackground from "../components/backgrounds/AuroraBackground";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import SmartLink from "../components/ui/SmartLink";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-ink" />
      <AuroraBackground />

      <div className="container-vc relative z-10 py-16">
        <RevealOnScroll className="mx-auto w-full max-w-md">
          <div className="mb-8 text-center">
            <SmartLink
              href="/"
              className="mx-auto flex w-fit items-center gap-2.5 font-display text-lg font-semibold text-text-soft"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-violet font-mono text-sm text-ink">
                <Terminal size={18} strokeWidth={2.5} />
              </span>
              VaultofCodes
            </SmartLink>
            <h1 className="mt-6 font-display text-2xl font-bold text-text-soft md:text-3xl">Welcome back</h1>
            <p className="mt-2 text-sm text-text-muted">Log in to continue your programs, jobs, and projects.</p>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-panel p-7 shadow-[0_30px_80px_-30px_rgba(139,127,242,0.25)]">
            {status === "success" ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <ArrowRight size={20} />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-text-soft">You're logged in!</p>
                <p className="mt-1 text-sm text-text-muted">This is a demo flow — no account was actually created.</p>
                <SmartLink
                  href="/"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-6 py-3 text-sm font-semibold text-ink"
                >
                  Continue to Home
                  <ArrowRight size={16} />
                </SmartLink>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-text-muted">
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-ink-line bg-ink py-3 pl-10 pr-4 text-sm text-text-soft placeholder:text-text-muted focus:border-teal/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wide text-text-muted">
                      Password
                    </label>
                    <a href="#" className="text-xs font-medium text-teal hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={6}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-ink-line bg-ink py-3 pl-10 pr-11 text-sm text-text-soft placeholder:text-text-muted focus:border-teal/50 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-soft"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(47,224,196,0.25)] transition-opacity disabled:opacity-70"
                >
                  {status === "submitting" ? "Logging in..." : "Log In"}
                  {status !== "submitting" && <ArrowRight size={16} />}
                </button>

                <div className="flex items-center gap-3 py-1">
                  <span className="h-px flex-1 bg-ink-line" />
                  <span className="text-xs text-text-muted">or</span>
                  <span className="h-px flex-1 bg-ink-line" />
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-ink-line py-3 text-sm font-semibold text-text-soft hover:border-violet/50"
                >
                  <Github size={16} />
                  Continue with GitHub
                </button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-text-muted">
            New to VaultofCodes?{" "}
            <SmartLink href="/career" className="font-semibold text-teal hover:underline">
              Explore programs &amp; jobs
            </SmartLink>
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
}
