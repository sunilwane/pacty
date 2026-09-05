"use client";

import { useState } from "react";

const SOCIAL_PROVIDERS = [
  { name: "Google", icon: "mail", color: "text-primary" },
  { name: "GitHub", icon: "code", color: "text-on-surface" },
  { name: "Twitter / X", icon: "tag", color: "text-secondary" },
] as const;

export function SocialLoginPanel() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl lg:p-card-padding-desktop">
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 bg-gradient-to-bl from-secondary-container/15 via-transparent to-transparent" />

      <div className="mb-space-md flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container-highest text-secondary shadow-sm">
            <span className="material-symbols-outlined text-xl">passkey</span>
          </div>
          <div>
            <span className="block font-mono text-label-caps uppercase tracking-wider text-secondary-fixed">
              Pillar B • Web2 Frictionless
            </span>
            <h2 className="font-inter text-headline-md text-on-surface">ERC-4337 Smart Account</h2>
          </div>
        </div>
        <span className="rounded bg-surface-container-highest px-space-sm py-space-2xs font-mono text-data-mono-sm text-secondary">
          Account Abstraction
        </span>
      </div>

      <p className="mb-space-md font-inter text-body-md text-on-surface-variant">
        No crypto wallet? Log in with your standard social accounts. Your Base smart account will be unlocked
        instantly.
      </p>

      <div className="mb-space-lg grid grid-cols-1 gap-space-xs sm:grid-cols-3">
        {SOCIAL_PROVIDERS.map((provider) => (
          <button
            key={provider.name}
            className="flex items-center justify-center gap-space-xs rounded-lg bg-surface-container-high px-space-md py-space-sm font-inter text-body-sm text-on-surface shadow-sm transition-all hover:bg-surface-container-highest"
            type="button"
          >
            <span className={`material-symbols-outlined text-base ${provider.color}`}>{provider.icon}</span>
            {provider.name}
          </button>
        ))}
      </div>

      <div className="relative mb-space-lg flex items-center justify-center">
        <div className="h-px w-full bg-surface-container-highest" />
        <span className="absolute bg-surface-container-low px-space-md font-mono text-label-caps uppercase tracking-widest text-on-surface-variant">
          OR WITH EMAIL &amp; PASSWORD
        </span>
      </div>

      <form
        className="mb-space-lg space-y-space-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label className="mb-space-xs block font-mono text-label-caps uppercase text-on-surface-variant">
            Work or Personal Email
          </label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-lg text-on-surface-variant">
              alternate_email
            </span>
            <input
              className="w-full rounded-lg bg-surface-container-lowest py-space-sm pl-10 pr-space-md font-inter text-body-md text-on-surface shadow-inner transition-all placeholder:text-on-surface-variant/50 focus:bg-surface-dim focus:outline-none"
              placeholder="trader@pactly.app"
              type="email"
            />
          </div>
        </div>

        <div>
          <div className="mb-space-xs flex items-center justify-between">
            <label className="block font-mono text-label-caps uppercase text-on-surface-variant">Password</label>
            <a
              className="font-mono text-data-mono-sm text-primary-container transition-colors hover:text-primary"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-lg text-on-surface-variant">key</span>
            <input
              className="w-full rounded-lg bg-surface-container-lowest py-space-sm pl-10 pr-10 font-inter text-body-md text-on-surface shadow-inner transition-all placeholder:text-on-surface-variant/50 focus:bg-surface-dim focus:outline-none"
              placeholder="••••••••••••"
              type={showPassword ? "text" : "password"}
            />
            <button
              className="absolute right-3 flex items-center text-on-surface-variant transition-colors hover:text-on-surface"
              onClick={() => setShowPassword((v) => !v)}
              type="button"
            >
              <span className="material-symbols-outlined text-lg">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <button
          className="flex w-full items-center justify-between rounded-xl bg-surface-container-highest px-space-lg py-space-md font-inter text-headline-md text-primary shadow-lg transition-all hover:bg-surface-bright"
          type="submit"
        >
          <span className="font-bold">Continue to Dashboard</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </form>

      <div className="mt-auto flex items-center justify-between rounded-lg bg-surface-container p-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-base text-secondary">enhanced_encryption</span>
          <span className="font-mono text-data-mono-sm text-on-surface-variant">
            Backed by Zero-Knowledge Session Proofs &amp; Bun Auth
          </span>
        </div>
        <span className="h-2 w-2 rounded-full bg-secondary-container" />
      </div>
    </div>
  );
}
