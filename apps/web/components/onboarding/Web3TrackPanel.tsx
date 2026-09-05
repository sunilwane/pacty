const WALLET_PROVIDERS = [
  { name: "MetaMask", icon: "pets", badge: "Detected", badgeColor: "text-outline" },
  { name: "Coinbase", icon: "layers", badge: "Smart Wallet", badgeColor: "text-primary-container" },
  { name: "Connect", icon: "qr_code_2", badge: "v2 Protocol", badgeColor: "text-outline" },
  { name: "Rainbow", icon: "flare", badge: "Mobile Ready", badgeColor: "text-outline", accent: "text-secondary" },
] as const;

export function Web3TrackPanel() {
  return (
    <div className="flex flex-col gap-space-xl rounded-xl bg-surface-container-low/80 p-space-xl shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-mono text-label-caps uppercase tracking-wider text-primary-fixed-dim">
            Step 01 • Connect Wallet Provider
          </span>
          <span className="font-mono text-data-mono-sm text-on-surface-variant">EVM Compatible</span>
        </div>
        <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-4">
          {WALLET_PROVIDERS.map((provider) => (
            <button
              key={provider.name}
              className="group flex flex-col items-center gap-space-xs rounded-lg bg-surface-container p-space-md text-center transition-all hover:bg-surface-container-high"
              type="button"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-lowest transition-transform group-hover:scale-110">
                <span
                  className={`material-symbols-outlined ${"accent" in provider ? provider.accent : "text-primary-container"}`}
                >
                  {provider.icon}
                </span>
              </div>
              <span className="font-inter text-headline-md text-on-surface group-hover:text-primary">
                {provider.name}
              </span>
              <span className={`font-mono text-label-caps ${provider.badgeColor}`}>{provider.badge}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-space-md">
        <span className="font-mono text-label-caps uppercase tracking-wider text-primary-fixed-dim">
          Step 02 • Define On-Chain Profile
        </span>

        <div className="flex flex-col gap-space-xs">
          <label className="flex justify-between font-inter text-body-sm text-on-surface">
            <span>Chosen Handle / Trader Nick</span>
            <span className="flex items-center gap-1 font-mono text-data-mono-sm text-primary-container">
              <span className="material-symbols-outlined text-xs">check_circle</span> Available
            </span>
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-space-md font-mono text-data-mono-md text-outline">@</span>
            <input
              className="w-full rounded-lg bg-surface-container py-space-sm pl-8 pr-space-md font-mono text-data-mono-md text-primary outline-none transition-colors focus:bg-surface-container-high"
              defaultValue="degen_trader"
              placeholder="your_handle"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <label className="font-inter text-body-sm text-on-surface">ENS / Base Name Binding</label>
            <span className="font-mono text-label-caps uppercase text-outline">L2 Reverse Resolver</span>
          </div>
          <div className="flex items-center gap-space-sm rounded-lg bg-surface-container p-space-sm">
            <span className="material-symbols-outlined text-base text-primary-container">dns</span>
            <input
              className="w-full bg-transparent font-mono text-data-mono-md text-on-surface outline-none"
              defaultValue="sunil.base.eth"
              placeholder="name.eth or name.base.eth"
              type="text"
            />
            <span className="whitespace-nowrap rounded bg-surface-container-high px-space-xs py-space-2xs font-mono text-data-mono-sm text-primary-fixed-dim">
              0x8B...7912
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-space-xs">
          <label className="font-inter text-body-sm text-on-surface">
            Referral / Squad Invite Code (Optional)
          </label>
          <div className="relative flex items-center">
            <input
              className="w-full rounded-lg bg-surface-container px-space-md py-space-sm font-mono text-data-mono-md uppercase text-on-surface outline-none transition-colors focus:bg-surface-container-high"
              defaultValue="CRICKET-GANG-99"
              placeholder="SQUAD-CODE"
              type="text"
            />
            <div className="absolute right-space-sm flex items-center gap-space-xs rounded bg-secondary-container/20 px-space-sm py-space-2xs text-secondary">
              <span className="material-symbols-outlined text-xs">loyalty</span>
              <span className="font-mono text-data-mono-sm">+0.10 ETH Extra</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        <span className="font-mono text-label-caps uppercase tracking-wider text-primary-fixed-dim">
          Step 03 • Granular Delegations
        </span>
        <label className="flex cursor-pointer items-start gap-space-md rounded-lg bg-surface-container p-space-md transition-colors hover:bg-surface-container-high">
          <input defaultChecked className="mt-1 h-4 w-4 cursor-pointer rounded accent-primary-container" type="checkbox" />
          <div className="flex flex-col">
            <span className="font-inter text-headline-md text-primary">Pre-authorize EIP-712 Session Keys</span>
            <span className="font-inter text-body-sm text-on-surface-variant">
              Sign once to authorize instant, 1-click frictionless micro-stakes without repeated wallet approval
              popups.
            </span>
          </div>
        </label>
        <label className="flex cursor-pointer items-start gap-space-md rounded-lg bg-surface-container p-space-md transition-colors hover:bg-surface-container-high">
          <input defaultChecked className="mt-1 h-4 w-4 cursor-pointer rounded accent-primary-container" type="checkbox" />
          <div className="flex flex-col">
            <span className="font-inter text-headline-md text-on-surface">Enable WebSocket Live Event Stream</span>
            <span className="font-inter text-body-sm text-on-surface-variant">
              Receive sub-second live updates on pool probability changes, order fills, and dispute filings.
            </span>
          </div>
        </label>
      </div>

      <button
        className="flex w-full items-center justify-center gap-space-sm rounded-xl bg-primary-container px-space-lg py-space-md font-inter text-headline-md font-bold text-on-primary-container shadow-xl transition-all hover:brightness-110"
        type="button"
      >
        <span className="material-symbols-outlined">bolt</span>
        <span>Deploy Smart Profile &amp; Claim 0.50 ETH</span>
      </button>
    </div>
  );
}
