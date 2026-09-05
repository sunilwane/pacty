"use client";

import { useState } from "react";
import Link from "next/link";
import { SiweAuthPanel } from "./SiweAuthPanel";
import { SocialLoginPanel } from "./SocialLoginPanel";

export function LoginForm() {
  const [showAuthStatus, setShowAuthStatus] = useState(false);

  return (
    <>
      <div className="relative z-10 grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SiweAuthPanel onSignStart={() => setShowAuthStatus(true)} />
        </div>
        <div className="lg:col-span-6">
          <SocialLoginPanel />
        </div>
      </div>

      {showAuthStatus && (
        <div className="mx-auto mt-space-xl max-w-xl rounded-xl bg-surface-container-high p-space-md text-primary shadow-2xl transition-all">
          <div className="flex items-center gap-space-sm">
            <span className="h-3 w-3 animate-ping rounded-full bg-primary-container" />
            <span className="font-inter text-body-md font-bold">
              Verifying EIP-4361 Signature with Bun/Elysia...
            </span>
          </div>
          <p className="mt-1 font-mono text-data-mono-sm text-on-surface-variant">
            Session payload verified. Emitting ERC-4337 paymaster authorization. Redirecting to terminal...
          </p>
        </div>
      )}
    </>
  );
}

export function LoginStats() {
  return (
    <>
      <div className="mt-space-2xl grid grid-cols-1 gap-space-md md:grid-cols-3">
        <div className="flex items-center gap-space-md rounded-xl bg-surface-container-lowest p-space-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-primary-container">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
              <path d="M7 16h10" />
            </svg>
          </div>
          <div>
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">Escrow Settlement</span>
            <div className="font-mono text-data-mono-md font-bold text-primary">124.85 ETH Active</div>
            <span className="font-mono text-data-mono-sm text-on-surface-variant">UMA OOv3 Validated</span>
          </div>
        </div>

        <div className="flex items-center gap-space-md rounded-xl bg-surface-container-lowest p-space-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-secondary">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div>
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">Network Gas Index</span>
            <div className="font-mono text-data-mono-md font-bold text-secondary">0.0012 Gwei</div>
            <span className="font-mono text-data-mono-sm text-on-surface-variant">Base L2 Sub-cent Swaps</span>
          </div>
        </div>

        <div className="flex items-center gap-space-md rounded-xl bg-surface-container-lowest p-space-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-tertiary-fixed-dim">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div>
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">Contract Security</span>
            <div className="font-mono text-data-mono-md font-bold text-on-surface">CertiK &amp; OpenZeppelin</div>
            <span className="font-mono text-data-mono-sm text-on-surface-variant">Formal Verification Passed</span>
          </div>
        </div>
      </div>

      <div className="mt-space-2xl flex flex-col items-center justify-between gap-space-md rounded-xl bg-surface-container-lowest/60 px-space-lg py-space-md pt-space-lg font-mono text-data-mono-sm text-on-surface-variant md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-space-md md:justify-start">
          <span className="flex items-center gap-1 text-on-surface">
            <span className="material-symbols-outlined text-base text-primary">verified</span>
            Secured by OpenZeppelin Escrow Contracts
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-primary-container">dns</span>
            Network: Base Sepolia (L2 Rollup)
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="font-bold text-primary">Total Escrow: 124.85 ETH</span>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="rounded bg-surface-container px-space-sm py-space-2xs font-mono text-label-caps text-primary">
            Audit Status: Passed
          </span>
          <Link
            className="flex items-center gap-1 font-inter text-body-sm font-semibold text-primary-container transition-colors hover:text-primary"
            href="/register"
          >
            Need an account? Register for testnet credits →
          </Link>
        </div>
      </div>
    </>
  );
}
