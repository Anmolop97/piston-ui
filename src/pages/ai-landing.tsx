import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Code2,
} from 'lucide-react';

export default function AiLandingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-[#0C0E12] text-[#EDEDEF] selection:bg-[#F97316]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. TOP MINIMAL NAVIGATION */}
      <nav className="border-b border-white/[0.08] backdrop-blur-md sticky top-0 z-50 bg-[#0C0E12]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#F97316] text-black font-black flex items-center justify-center text-sm">
              AI
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">
              Cortex Engine
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-xs font-medium text-[#8B93A0]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#bento" className="hover:text-white transition-colors">Architecture</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="http://localhost:5173/"
              className="text-xs font-medium text-[#8B93A0] hover:text-white px-3 py-1.5 transition-colors"
            >
              Back to Catalog
            </a>
            <a
              href="#pricing"
              className="text-xs font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION WITH SHIMMER BUTTON */}
      <section className="relative pt-24 pb-20 px-6 max-w-5xl mx-auto text-center">
        {/* Subtle Ambient Depth (No harsh glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-[#94A3B8] mb-8">
          <div className="w-2 h-2 rounded-full bg-[#F97316] ring-2 ring-[#F97316]/20" />
          <span>Autonomous Reasoning Engine v4.8</span>
          <span className="text-white/30">•</span>
          <span className="text-white font-semibold">Production Ready</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.12]">
          Next-generation intelligence.{' '}
          <span className="text-[#94A3B8]">Built for engineers who ship.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-[#8B93A0] max-w-2xl mx-auto leading-relaxed">
          Deploy verified multi-agent systems with formal proofs, sub-second latency, and zero guesswork. Grounded strictly in real-time execution.
        </p>

        {/* CTA Stack (With Shimmer Button) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Custom Shimmer Button */}
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] px-7 py-3.5 text-sm font-semibold text-black shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            {/* Sweeping Shimmer Beam */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>

          <a
            href="#bento"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-sm font-medium text-[#CBD5E1] transition-colors"
          >
            Inspect Architecture
          </a>
        </div>
      </section>

      {/* 3. BENTO GRID ARCHITECTURE SECTION */}
      <section id="bento" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#F97316] mb-2 font-semibold">
            System Architecture
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            High-Density Autonomous Execution
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Main Large Telemetry Stream (Spans 2 cols) */}
          <div className="md:col-span-2 rounded-2xl bg-[#13161D] border border-white/[0.08] p-7 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center space-x-2 text-[#94A3B8] text-xs font-mono mb-3">
                <Terminal className="w-4 h-4 text-[#F97316]" />
                <span>STATE_MACHINE_LOGS</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Self-Verifying Agentic Pipeline
              </h3>
              <p className="text-sm text-[#8B93A0] mt-2 max-w-lg">
                Interrupts only for irreversible actions. Every hypothesis is tested against live compiler checks and verified telemetry.
              </p>
            </div>

            {/* Terminal Window Mockup */}
            <div className="mt-6 rounded-xl bg-[#090B0E] border border-white/[0.06] p-4 font-mono text-xs text-[#CBD5E1] space-y-2">
              <div className="flex items-center space-x-2 pb-2 border-b border-white/[0.05] text-[#64748B]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[11px] ml-2">cortex-daemon — verified</span>
              </div>
              <p className="text-emerald-400">✓ Type check passed (0 errors in 38 files)</p>
              <p className="text-zinc-400">→ Running unit invariants across 14 boundary scenarios...</p>
              <p className="text-white font-semibold">✓ Production build succeeded in 320ms [98.4% coverage]</p>
            </div>
          </div>

          {/* Card 2: Sub-Second Latency */}
          <div className="rounded-2xl bg-[#13161D] border border-white/[0.08] p-7 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Sub-Second p99</h3>
              <p className="text-xs text-[#8B93A0] mt-2">
                Edge-accelerated neural weights stream tokens with immediate tactile responsiveness.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <span className="text-3xl font-bold font-mono text-white tabular-nums">94ms</span>
              <span className="text-xs text-[#64748B] ml-2 font-mono">avg response</span>
            </div>
          </div>

          {/* Card 3: Formal Verification */}
          <div className="rounded-2xl bg-[#13161D] border border-white/[0.08] p-7 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Formal Proofs</h3>
              <p className="text-xs text-[#8B93A0] mt-2">
                Guaranteed zero hallucinations. Claims are checked against real source repositories.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center space-x-2 text-xs text-emerald-400 font-mono">
              <Check className="w-4 h-4" />
              <span>Deterministic Assertion</span>
            </div>
          </div>

          {/* Card 4: Multi-Agent Parallel Tree (Spans 2 cols) */}
          <div className="md:col-span-2 rounded-2xl bg-[#13161D] border border-white/[0.08] p-7 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center space-x-2 text-[#94A3B8] text-xs font-mono mb-3">
                <Layers className="w-4 h-4 text-[#F97316]" />
                <span>MULTI_AGENT_MESH</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Parallel Execution Topologies
              </h3>
              <p className="text-sm text-[#8B93A0] mt-2 max-w-lg">
                Assign specialized sub-agents across architecture, test generation, and performance profiling concurrently.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center font-mono text-xs">
              <div className="bg-[#090B0E] p-3 rounded-xl border border-white/[0.06]">
                <span className="text-[#F97316] font-bold block mb-1">Agent 01</span>
                <span className="text-[#8B93A0] text-[11px]">Architect</span>
              </div>
              <div className="bg-[#090B0E] p-3 rounded-xl border border-white/[0.06]">
                <span className="text-emerald-400 font-bold block mb-1">Agent 02</span>
                <span className="text-[#8B93A0] text-[11px]">Test Suite</span>
              </div>
              <div className="bg-[#090B0E] p-3 rounded-xl border border-white/[0.06]">
                <span className="text-sky-400 font-bold block mb-1">Agent 03</span>
                <span className="text-[#8B93A0] text-[11px]">Profiler</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#F97316] mb-2 font-semibold">
            Simple Pricing
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Predictable Plans for Engineering Teams
          </p>

          {/* Billing Switch */}
          <div className="mt-6 inline-flex items-center bg-[#13161D] p-1 rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                !isAnnual ? 'bg-white text-black font-semibold shadow-sm' : 'text-[#8B93A0] hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center space-x-1.5 ${
                isAnnual ? 'bg-white text-black font-semibold shadow-sm' : 'text-[#8B93A0] hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="bg-[#F97316] text-black text-[10px] px-1.5 py-0.5 rounded font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan 1: Starter */}
          <div className="rounded-2xl bg-[#13161D] border border-white/[0.08] p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#8B93A0] uppercase font-semibold">Starter</span>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white tracking-tight font-sans">₹0</span>
                <span className="text-xs text-[#64748B] ml-2">/ month</span>
              </div>
              <p className="text-xs text-[#8B93A0] mt-3">Ideal for solo engineers prototyping ideas.</p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/[0.06] text-xs text-[#CBD5E1]">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>500 autonomous runs / mo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>1 concurrent sub-agent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>Standard community support</span>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full py-2.5 rounded-xl border border-white/10 hover:bg-white/[0.05] text-xs font-semibold text-white transition-colors cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Plan 2: Pro (Featured with Shimmer) */}
          <div className="rounded-2xl bg-[#181C26] border border-[#F97316]/50 p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm tracking-wider">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-mono text-[#F97316] uppercase font-semibold">Pro Team</span>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white tracking-tight tabular-nums font-sans">
                  ₹{isAnnual ? '1,999' : '2,499'}
                </span>
                <span className="text-xs text-[#64748B] ml-2">/ seat / month</span>
              </div>
              <p className="text-xs text-[#8B93A0] mt-3">Full autonomous engine for shipping products fast.</p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/[0.08] text-xs text-white">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>Unlimited verified runs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>5 parallel autonomous sub-agents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>Deterministic formal compiler checks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>Priority 24/7 engineering chat</span>
                </div>
              </div>
            </div>

            {/* Shimmer Button for Pro Plan */}
            <button className="group relative mt-8 w-full overflow-hidden rounded-xl bg-[#F97316] py-3 text-xs font-bold text-black shadow-md transition-all hover:bg-[#EA580C] cursor-pointer">
              <span className="relative z-10">Start 14-Day Free Pro Trial</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </button>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="rounded-2xl bg-[#13161D] border border-white/[0.08] p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#8B93A0] uppercase font-semibold">Enterprise</span>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white tracking-tight font-sans">₹14,999</span>
              </div>
              <p className="text-xs text-[#8B93A0] mt-3">Dedicated VPC instance and private LLM keys.</p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/[0.06] text-xs text-[#CBD5E1]">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>Dedicated VPC deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>Custom fine-tuned weights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#F97316]" />
                  <span>SLA 99.99% uptime guarantee</span>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full py-2.5 rounded-xl border border-white/10 hover:bg-white/[0.05] text-xs font-semibold text-white transition-colors cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-white/[0.08] text-center text-xs text-[#64748B]">
        <p>© 2026 Cortex Engine. High-Craft Autonomous Systems.</p>
      </footer>
    </div>
  );
}
