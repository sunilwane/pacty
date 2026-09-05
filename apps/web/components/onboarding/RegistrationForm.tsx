"use client";

import { useState } from "react";
import { Web3TrackPanel } from "./Web3TrackPanel";
import { SocialTrackPanel } from "./SocialTrackPanel";

type Track = "web3" | "social";

export function RegistrationForm() {
  const [track, setTrack] = useState<Track>("web3");

  const tabBase =
    "flex-1 flex items-center justify-center gap-space-sm py-space-md px-space-lg rounded-lg font-inter text-headline-md transition-all";
  const tabActive = `${tabBase} bg-surface-container shadow-md`;
  const tabInactive = `${tabBase} text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface`;

  return (
    <div className="flex flex-col gap-space-lg lg:col-span-8">
      <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-lowest p-space-xs shadow-inner sm:flex-row">
        <button
          className={`${track === "web3" ? `${tabActive} text-primary` : tabInactive}`}
          onClick={() => setTrack("web3")}
          type="button"
        >
          <span className="material-symbols-outlined text-primary-container">account_balance_wallet</span>
          <span>Web3 Native (Self-Custodial)</span>
        </button>
        <button
          className={`${track === "social" ? `${tabActive} text-secondary` : tabInactive}`}
          onClick={() => setTrack("social")}
          type="button"
        >
          <span className="material-symbols-outlined text-secondary">bolt</span>
          <span>1-Click Social (ERC-4337)</span>
        </button>
      </div>

      {track === "web3" ? <Web3TrackPanel /> : <SocialTrackPanel />}
    </div>
  );
}
