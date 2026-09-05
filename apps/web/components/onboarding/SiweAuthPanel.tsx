"use client";

import { useCallback, useState } from "react";

const WALLET_PROVIDERS = [
  { id: "metamask", label: "MetaMask", icon: "token", iconColor: "text-primary-container" },
  { id: "coinbase", label: "Coinbase", icon: "verified", iconColor: "text-tertiary-fixed-dim" },
  { id: "wconnect", label: "WConnect", icon: "qr_code_scanner", iconColor: "text-primary-fixed" },
  { id: "rainbow", label: "Rainbow", icon: "looks", iconColor: "text-secondary" },
  { id: "phantom", label: "Phantom", icon: "fitbit_push_ups", iconColor: "text-tertiary" },
] as const;

type WalletId = (typeof WALLET_PROVIDERS)[number]["id"];
type SiweState = "idle" | "signing" | "success";

function generateNonce() {
  return (
    Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 6)
  );
}

export function SiweAuthPanel({ onSignStart }: { onSignStart?: () => void }) {
  const [selectedWallet, setSelectedWallet] = useState<WalletId>("metamask");
  const [nonce, setNonce] = useState("8fa4c09d3b2e");
  const [sessionKeys, setSessionKeys] = useState(true);
  const [siweState, setSiweState] = useState<SiweState>("idle");

  const handleWalletSelect = useCallback((id: WalletId) => {
    setSelectedWallet(id);
    setNonce(generateNonce());
    setSiweState("idle");
  }, []);

  const handleSign = useCallback(() => {
    onSignStart?.();
    setSiweState("signing");
    setTimeout(() => setSiweState("success"), 1200);
  }, [onSignStart]);

  const walletActive =
    "flex flex-col items-center justify-center rounded-lg bg-surface-container-highest p-space-xs text-primary shadow-[0_0_12px_rgba(0,242,254,0.3)] transition-all";
  const walletInactive =
    "flex flex-col items-center justify-center rounded-lg bg-surface-container p-space-xs text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl lg:p-card-padding-desktop">
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 bg-gradient-to-bl from-primary-container/15 via-transparent to-transparent" />

      <div className="mb-space-md flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container-highest text-primary-container shadow-sm">
            <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
          </div>
          <div>
            <span className="block font-mono text-label-caps uppercase tracking-wider text-primary-fixed-dim">
              Pillar A • Web3 Native
            </span>
            <h2 className="font-inter text-headline-md text-on-surface">SIWE Nonce Authentication</h2>
          </div>
        </div>
        <span className="rounded bg-surface-container-highest px-space-sm py-space-2xs font-mono text-data-mono-sm text-primary">
          EIP-4361
        </span>
      </div>

      <p className="mb-space-md font-inter text-body-md text-on-surface-variant">
        Connect your Web3 signer. Authenticate deterministically with your Base Sepolia wallet state and claim
        trading yields.
      </p>

      <div className="mb-space-md">
        <label className="mb-space-xs block font-mono text-label-caps uppercase text-on-surface-variant">
          Select Provider
        </label>
        <div className="grid grid-cols-5 gap-space-xs">
          {WALLET_PROVIDERS.map((provider) => (
            <button
              key={provider.id}
              className={selectedWallet === provider.id ? walletActive : walletInactive}
              onClick={() => handleWalletSelect(provider.id)}
              type="button"
            >
              <span className={`material-symbols-outlined mb-1 text-2xl ${provider.iconColor}`}>
                {provider.icon}
              </span>
              <span className="font-mono text-label-caps">{provider.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-space-md rounded-lg bg-surface-container-lowest p-space-md">
        <div className="mb-space-xs flex items-center justify-between pb-space-xs">
          <span className="flex items-center gap-1 font-mono text-label-caps uppercase text-primary-fixed-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            Live SIWE Challenge Payload
          </span>
          <span className="font-mono text-data-mono-sm text-on-surface-variant">Ready to sign</span>
        </div>
        <div className="space-y-1 overflow-x-auto rounded bg-surface-dim p-space-sm font-mono text-data-mono-sm text-on-surface">
          <div className="text-on-surface-variant">pactly.app wants you to sign in with your Ethereum account:</div>
          <div className="font-bold text-primary">0x71C8041c305a415a77038A625895743D751C4f9b</div>
          <div className="pt-1 text-on-surface-variant">
            Sign in to authenticate session on the Pactly protocol.
          </div>
          <div className="text-on-surface-variant">
            URI: <span className="text-on-surface">https://pactly.app/login</span>
          </div>
          <div className="text-on-surface-variant">
            Version: <span className="text-on-surface">1</span>
          </div>
          <div className="text-on-surface-variant">
            Chain ID: <span className="text-primary-fixed-dim">84532 (Base Sepolia)</span>
          </div>
          <div className="text-on-surface-variant">
            Nonce: <span className="text-secondary-fixed">{nonce}</span>
          </div>
          <div className="text-on-surface-variant">
            Issued At: <span className="text-on-surface">2025-05-14T10:42:01.812Z</span>
          </div>
        </div>
      </div>

      <div className="mb-space-lg flex items-start gap-space-sm rounded-lg bg-surface-container p-space-sm">
        <input
          checked={sessionKeys}
          className="mt-1 h-4 w-4 cursor-pointer rounded accent-primary-container"
          id="session-keys"
          onChange={(e) => setSessionKeys(e.target.checked)}
          type="checkbox"
        />
        <div className="flex flex-col">
          <label
            className="flex cursor-pointer items-center gap-space-xs font-inter text-body-sm font-semibold text-on-surface"
            htmlFor="session-keys"
          >
            <span>Enable Gasless Session Keys (EIP-712)</span>
            <span className="rounded bg-surface-container-highest px-space-xs font-mono text-label-caps text-primary">
              RECOMMENDED
            </span>
          </label>
          <span className="font-inter text-body-sm text-on-surface-variant">
            1-tap high-frequency prediction executions for 24h without repeating browser wallet signatures.
          </span>
        </div>
      </div>

      <button
        className="group/cta relative flex w-full items-center justify-between rounded-xl bg-primary-container px-space-lg py-space-md font-inter text-headline-md text-on-primary shadow-[0_0_24px_rgba(0,242,254,0.4)] transition-all hover:bg-primary-fixed"
        disabled={siweState === "signing"}
        onClick={handleSign}
        type="button"
      >
        {siweState === "idle" && (
          <>
            <span className="flex items-center gap-space-xs font-bold tracking-tight">
              <span className="material-symbols-outlined text-2xl">bolt</span>
              Sign Nonce &amp; Enter Pactly
            </span>
            <span className="rounded-full bg-on-primary/15 px-space-sm py-space-2xs font-mono text-data-mono-sm tracking-normal">
              Elysia JWT ~11ms
            </span>
          </>
        )}
        {siweState === "signing" && (
          <>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              Requesting Signature...
            </span>
            <span className="rounded-full bg-on-primary/15 px-2 py-1 font-mono text-data-mono-sm">
              Waiting for 0x71...
            </span>
          </>
        )}
        {siweState === "success" && (
          <>
            <span className="flex items-center gap-2 font-bold text-primary">
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
              Nonce Signed • Redirecting...
            </span>
            <span className="rounded-full bg-surface-container-highest px-2 py-1 font-mono text-data-mono-sm text-primary">
              HTTP 200 OK
            </span>
          </>
        )}
      </button>

      <div className="mt-space-md flex items-center justify-between font-mono text-data-mono-sm text-on-surface-variant">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-primary-container">verified_user</span>
          EIP-4361 Verified
        </span>
        <span>Cryptographic Nonce Verified by Elysia</span>
      </div>
    </div>
  );
}
