import Link from "next/link";

export function RegisterHero() {
  return (
    <>
      <div className="mb-space-lg flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="font-mono text-label-caps uppercase tracking-wider text-primary-fixed-dim">
            PACTLY PROTOCOL
          </span>
          <span className="text-outline-variant">•</span>
          <span className="font-mono text-data-mono-sm text-on-surface-variant">V2.4 ONBOARDING</span>
        </div>
        <div className="flex items-center gap-space-xs rounded-full bg-surface-container-high/80 px-space-md py-space-2xs backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary-container" />
          <span className="font-mono text-data-mono-sm text-primary">ERC-4337 PAYMASTER SPONSORED</span>
        </div>
      </div>

      <div className="mb-space-xl flex flex-col gap-space-xs">
        <h1 className="font-inter text-display-xl tracking-tight text-primary">Create Your Trader Identity</h1>
        <p className="max-w-2xl font-inter text-body-lg text-on-surface-variant">
          Join Pactly to spin up social prediction pools, stake in peer-to-peer wagers, and unlock automated
          cryptographic smart-contract settlements on Base Sepolia.
        </p>
      </div>
    </>
  );
}

export function FaucetBanner() {
  return (
    <div className="relative mb-space-2xl overflow-hidden rounded-xl bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-low p-space-md shadow-xl">
      <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary-container/10 blur-2xl" />
      <div className="relative z-10 flex flex-col items-start justify-between gap-space-md sm:flex-row sm:items-center">
        <div className="flex items-center gap-space-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest text-primary-container shadow-inner">
            <span className="material-symbols-outlined text-xl">featured_seasonal_and_gifts</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-inter text-headline-md font-bold text-primary">Genesis Faucet Bonus</span>
              <span className="rounded bg-secondary-container/20 px-space-xs py-space-2xs font-mono text-label-caps uppercase text-secondary">
                Instant Drop
              </span>
            </div>
            <p className="font-inter text-body-sm text-on-surface-variant">
              Claim{" "}
              <span className="font-mono text-data-mono-md font-semibold text-primary-container">
                0.50 Base Sepolia ETH
              </span>{" "}
              +{" "}
              <span className="font-mono text-data-mono-md font-semibold text-secondary">1,000 Pactly Chips</span>{" "}
              immediately upon identity verification.
            </p>
          </div>
        </div>
        <Link
          className="inline-flex items-center gap-space-xs whitespace-nowrap font-inter text-body-sm text-primary transition-colors hover:text-primary-container"
          href="/login"
        >
          <span>Already have an account? Sign in</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
