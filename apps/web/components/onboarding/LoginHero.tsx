import Link from "next/link";

export function LoginHero() {
  return (
    <div className="relative z-10 mx-auto mb-space-2xl flex max-w-2xl flex-col items-center text-center">
      <div className="mb-space-lg inline-flex rounded-full bg-surface-container-lowest p-space-xs shadow-inner">
        <button
          className="rounded-full bg-primary-container px-space-lg py-space-xs font-inter text-body-sm font-semibold text-on-primary shadow-[0_0_16px_rgba(0,242,254,0.4)] transition-all"
          type="button"
        >
          Sign In
        </button>
        <Link
          className="rounded-full px-space-lg py-space-xs font-inter text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
          href="/register"
        >
          Create New Account
        </Link>
      </div>

      <div className="mb-space-sm inline-flex items-center gap-space-xs rounded-full bg-surface-container-high px-space-md py-space-xs">
        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary-fixed-dim" />
        <span className="font-mono text-label-caps uppercase tracking-widest text-primary">
          Automatic Role Routing
        </span>
        <span className="font-mono text-data-mono-sm text-on-surface-variant">• /admin or /app/dashboard</span>
      </div>

      <h1 className="mb-space-sm font-inter text-display-xl tracking-tight text-primary">Welcome Back, Trader</h1>
      <p className="max-w-xl font-inter text-body-lg text-on-surface-variant">
        Sign in to access your prediction positions, friend squads, and escrow claims on Base Sepolia.
      </p>

      <div className="mt-space-md flex flex-wrap items-center justify-center gap-space-sm font-mono text-data-mono-sm text-on-surface-variant">
        <span className="inline-flex items-center gap-1 rounded bg-surface-container px-space-sm py-space-2xs">
          <span className="material-symbols-outlined text-xs text-primary">bolt</span>
          RPC: 18ms
        </span>
        <span className="inline-flex items-center gap-1 rounded bg-surface-container px-space-sm py-space-2xs">
          <span className="material-symbols-outlined text-xs text-primary">lock_open</span>
          UMA Oracle Ready
        </span>
        <span className="inline-flex items-center gap-1 rounded bg-surface-container px-space-sm py-space-2xs">
          <span className="material-symbols-outlined text-xs text-secondary">shield</span>
          EIP-4361 Auth Guard
        </span>
      </div>
    </div>
  );
}
