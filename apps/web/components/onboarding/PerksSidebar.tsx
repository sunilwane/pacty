import Image from "next/image";

const PERKS = [
  {
    num: "01",
    title: "Zero Custody Escrow",
    desc: "Tokens are locked directly in Foundry-tested Solidity contracts. Nobody holds your keys or test funds.",
    color: "text-primary-container",
  },
  {
    num: "02",
    title: "Social Friend Squads",
    desc: "Create private micro-pools with custom invite codes for sports tournaments, esports, and office bets.",
    color: "text-secondary",
  },
  {
    num: "03",
    title: "Automated Oracles",
    desc: "Fair, decentralized round settlements backed by Pyth price feeds, UMA optimistic oracles, and Chainlink.",
    color: "text-primary-fixed-dim",
  },
  {
    num: "04",
    title: "100% Gas Subsidized",
    desc: "All testnet transactions are routed via the Base Paymaster with sponsored gas allowances.",
    color: "text-tertiary-fixed-dim",
  },
] as const;

const RECENT_REGISTRATIONS = [
  {
    handle: "@cryptonerd_9",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPCdKykjSOwYKjMrz8KHPpOGFyS53-QOkPc--eq4qgU9cw41N0CqD_ANnAjvYQxtztyWiHUJo41UerbYLFuIRlQQSYUICJ6Bs3b3sT63he7hDHj3rf5nab6oG4zs8Vt-_mtx-hQa4LfR6f4t-_hhGDpy2YfAAX8vPMdNgTznil69IyQcKdtl1Fvi6VrN_foc1AH5sytSvH0IxE6C5PmNw26aUuWQvhWFEZBzWHWcjgdrtczVE4-nPyjQ",
  },
  {
    handle: "@wagerqueen",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEH-I4IZCCFNXAHybAceEOH9TmfgH77P7WcEeg_jsYJ2u-FW1vpw_c3GZ5J9H5iH4OdeUbEtjryDYO2gtqbsAymB1_8nbjI8SMAxwe-yWR1TrHLmODkOzHXSTryvsXQkQc_rKDuiI05ksBe44Xw4xXmcGvvW5TiTWOVOD_JDonT3aTxJwlQxXc1KYrOGKqJ2IhYZit71AXpMr_7R5tQWT4hzNu11GLve3SnDIOH288pmLBbPtC1vo26Q",
  },
] as const;

export function PerksSidebar() {
  return (
    <div className="flex flex-col gap-space-lg lg:col-span-4">
      <div className="flex flex-col gap-space-md rounded-xl bg-surface-container/90 p-space-lg shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-space-xs pb-space-xs">
          <span className="material-symbols-outlined text-primary-container">verified_user</span>
          <h2 className="font-inter text-headline-md text-primary">Why Trade on Pactly?</h2>
        </div>
        <div className="flex flex-col gap-space-md">
          {PERKS.map((perk) => (
            <div key={perk.num} className="flex items-start gap-space-sm">
              <div
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-high ${perk.color}`}
              >
                <span className="font-mono text-data-mono-sm font-bold">{perk.num}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-headline-md text-on-surface">{perk.title}</span>
                <span className="font-inter text-body-sm text-on-surface-variant">{perk.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-low p-space-lg shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">Live Faucet Pool</span>
          </div>
          <span className="font-mono text-data-mono-sm text-primary-fixed-dim">Base Sepolia</span>
        </div>
        <div className="flex flex-col gap-space-2xs">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-odds-display text-primary">48,290 / 50k</span>
            <span className="font-mono text-data-mono-sm text-on-surface-variant">TX Available Today</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
            <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-primary-container to-secondary-container" />
          </div>
        </div>
        <div className="flex items-center justify-between pt-space-xs font-mono text-data-mono-sm text-on-surface-variant">
          <span>
            Daily Reset: <span className="font-semibold text-primary">04h 12m</span>
          </span>
          <span>
            Latency: <span className="font-semibold text-primary-container">18ms</span>
          </span>
        </div>
        <div className="flex items-center gap-space-sm rounded-lg bg-surface-container-highest/40 p-space-sm">
          <Image
            alt="Base Paymaster node visualization"
            className="h-12 w-12 flex-shrink-0 rounded-md object-cover"
            height={48}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARDI2BuQHe2u5VG4wi-_LaWz5IJCgN2Ouc57Zsz4GeItCGhdvFHl8Pyh157FMQWBx8B07mVg2dGeYw07XQKI-igeTTJui_IgDm0PJcW0QmP0LTEm0NZJJ-liD9AKfUQSri5vH70Sqf5oQcw3mO-wk7gMlNBeWq6i9VX45BQKLoX2vtjTire5WaDH6wT5tJJrqLsWIsKVGKQZF1zsPy5v-hbnAtNGZhzKGMyikwFVHLL-5QzflLvZB70w"
            width={48}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-inter text-headline-md text-on-surface">Base Paymaster Node #04</span>
            <span className="truncate font-mono text-data-mono-sm text-outline">Contract: 0x5a31...88c2</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-low p-space-md shadow-md">
        <span className="font-mono text-label-caps uppercase tracking-wider text-outline">Recent Registrations</span>
        {RECENT_REGISTRATIONS.map((reg) => (
          <div key={reg.handle} className="flex items-center justify-between py-space-xs">
            <div className="flex items-center gap-space-xs">
              <Image alt="" className="h-6 w-6 rounded-full object-cover" height={24} src={reg.avatar} width={24} />
              <span className="font-mono text-data-mono-sm text-primary">{reg.handle}</span>
            </div>
            <span className="font-mono text-data-mono-sm text-primary-container">+0.50 ETH</span>
          </div>
        ))}
        <div className="flex items-center justify-between py-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-container font-mono text-data-mono-sm text-secondary">
              0x
            </span>
            <span className="font-mono text-data-mono-sm text-on-surface-variant">0x3F...89dA</span>
          </div>
          <span className="font-mono text-data-mono-sm text-primary-container">+0.50 ETH</span>
        </div>
      </div>
    </div>
  );
}

export function RegisterFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-space-md px-screen-margin-mobile sm:flex-row lg:px-screen-margin-desktop">
        <div className="flex items-center gap-space-md">
          <span className="font-inter text-headline-md font-bold text-primary">Pactly</span>
          <span className="font-inter text-body-sm text-on-surface-variant">
            Next-Gen Web3 Social Prediction Markets
          </span>
        </div>
        <div className="flex items-center gap-space-lg">
          <span className="font-mono text-data-mono-sm text-on-surface-variant">Oracle: Pyth &amp; UMA</span>
          <span className="font-mono text-data-mono-sm text-on-surface-variant">© 2025 Pactly</span>
        </div>
      </div>
    </footer>
  );
}
