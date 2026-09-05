const SOCIAL_PROVIDERS = [
  { name: "Google", icon: "mail", color: "text-primary-container" },
  { name: "GitHub", icon: "code", color: "text-on-surface" },
  { name: "Discord", icon: "forum", color: "text-tertiary-fixed-dim" },
  { name: "X / Twitter", icon: "alternate_email", color: "text-primary" },
] as const;

export function SocialTrackPanel() {
  return (
    <div className="flex flex-col gap-space-xl rounded-xl bg-surface-container-low/80 p-space-xl shadow-2xl backdrop-blur-xl">
      <div className="flex items-start gap-space-md rounded-lg bg-surface-container p-space-md">
        <span className="material-symbols-outlined text-2xl text-secondary">verified</span>
        <div className="flex flex-col">
          <span className="font-inter text-headline-md text-secondary">Zero Crypto Required</span>
          <p className="font-inter text-body-sm text-on-surface-variant">
            We deploy a counterfactual ERC-4337 Smart Contract Wallet on Base Sepolia tied to your federated login.
            Pay zero gas fees!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        <span className="font-mono text-label-caps uppercase tracking-wider text-primary-fixed-dim">
          Fast Federated Sign-Up
        </span>
        <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-4">
          {SOCIAL_PROVIDERS.map((provider) => (
            <button
              key={provider.name}
              className="flex items-center justify-center gap-space-sm rounded-lg bg-surface-container px-space-md py-space-sm font-inter text-body-sm text-on-surface transition-colors hover:bg-surface-container-high"
              type="button"
            >
              <span className={`material-symbols-outlined text-base ${provider.color}`}>{provider.icon}</span>
              {provider.name}
            </button>
          ))}
        </div>
      </div>

      <div className="my-space-xs flex items-center gap-space-md">
        <div className="h-px flex-1 bg-surface-container-highest" />
        <span className="font-mono text-label-caps uppercase text-outline">Or With Email Credential</span>
        <div className="h-px flex-1 bg-surface-container-highest" />
      </div>

      <div className="flex flex-col gap-space-md">
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
          <div className="flex flex-col gap-space-xs">
            <label className="font-inter text-body-sm text-on-surface">Display Name</label>
            <input
              className="w-full rounded-lg bg-surface-container px-space-md py-space-sm font-inter text-body-md text-on-surface outline-none focus:bg-surface-container-high"
              placeholder="e.g. Alex Trader"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-space-xs">
            <label className="font-inter text-body-sm text-on-surface">Email Address</label>
            <input
              className="w-full rounded-lg bg-surface-container px-space-md py-space-sm font-inter text-body-md text-on-surface outline-none focus:bg-surface-container-high"
              placeholder="trader@pactly.app"
              type="email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <label className="font-inter text-body-sm text-on-surface">Wallet Recovery Password</label>
            <span className="font-mono text-data-mono-sm text-primary-container">Entropy: Strong (128-bit)</span>
          </div>
          <input
            className="w-full rounded-lg bg-surface-container px-space-md py-space-sm font-mono text-data-mono-md text-primary outline-none focus:bg-surface-container-high"
            defaultValue="••••••••••••••••"
            type="password"
          />
          <div className="mt-1 flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full bg-surface-container">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1 bg-primary-container" />
            ))}
          </div>
        </div>

        <label className="mt-space-sm flex cursor-pointer items-start gap-space-md">
          <input defaultChecked className="mt-1 h-4 w-4 cursor-pointer rounded accent-secondary" type="checkbox" />
          <span className="font-inter text-body-sm text-on-surface-variant">
            I acknowledge this is an audited testnet MVP protocol deployed on Base Sepolia. All funds, balances, and
            Pactly Chips are test collateral for social wagering experimentation.
          </span>
        </label>
      </div>

      <button
        className="flex w-full items-center justify-center gap-space-sm rounded-xl bg-secondary-container px-space-lg py-space-md font-inter text-headline-md font-bold text-on-secondary-container shadow-xl transition-all hover:brightness-110"
        type="button"
      >
        <span className="material-symbols-outlined">rocket_launch</span>
        <span>Create ERC-4337 Account &amp; Get Started</span>
      </button>
    </div>
  );
}
