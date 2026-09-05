import Link from "next/link";

const navItems = [
  { href: "/app/dashboard", label: "Dashboard" },
  { href: "/app/predictions", label: "Predictions" },
  { href: "/app/groups", label: "Groups" },
  { href: "/app/wallet", label: "Wallet" },
  { href: "/app/settings", label: "Settings" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="nav">
        <Link href="/app/dashboard" className="nav-brand">
          Pactly
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}
