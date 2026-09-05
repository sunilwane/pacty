import Link from "next/link";

const adminNavItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/predictions", label: "Predictions" },
  { href: "/admin/reports", label: "Reports" },
  { href: "/admin/analytics", label: "Analytics" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="nav" style={{ borderColor: "#7f1d1d" }}>
        <Link href="/admin/dashboard" className="nav-brand">
          Pactly Admin
        </Link>
        <div className="nav-links">
          {adminNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/app/dashboard">← Back to App</Link>
        </div>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}
