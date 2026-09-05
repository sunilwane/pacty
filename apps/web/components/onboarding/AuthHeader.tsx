import Image from "next/image";
import Link from "next/link";

type AuthHeaderProps = {
  activeNav: "login" | "register";
};

export function AuthHeader({ activeNav }: AuthHeaderProps) {
  const navLink =
    "font-inter text-body-md transition-colors";
  const navInactive = `${navLink} text-on-surface-variant hover:text-on-surface`;
  const navActive =
    "rounded-lg bg-surface-container-high font-bold text-primary transition-colors px-space-sm py-space-xs md:px-space-md md:py-space-sm";

  return (
    <header className="fixed top-0 z-50 w-full bg-surface-container-lowest/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-space-md px-screen-margin-mobile lg:px-screen-margin-desktop">
        <div className="flex min-w-0 items-center gap-space-md">
          <Image
            alt="Pactly logo"
            className="h-8 w-auto object-contain"
            height={32}
            src="https://lh3.googleusercontent.com/aida/AEtjO1XiDnuIZvB80SM3TFZMxRNoiJFU4YlkaMch6F4UU73FvY6i0Af6JucmeW6nG9MXGNNrzBUabci__y1HkpMt-KRLojX7jYil00wdU4l_VQ_QyBMxZgsL15wR6jRo9EHkqYs_M_3bk9ADlZRqT-4bFappFk4dtjbnXeMXt9lJIpxpYXf20KB2Ekewtl5UR5ffFFxZYxEgqUtewXKs8jqk6tswPBiTm--gat6m3K8qxRqowe93j5XH4P6mbN5V"
            width={32}
          />
          <div className="flex flex-col">
            <span className="font-inter text-headline-md font-bold tracking-tight text-primary">Pactly</span>
            <span className="-mt-1 font-mono text-label-caps uppercase tracking-wider text-primary-fixed-dim">
              Prediction Markets
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-space-sm md:flex">
          <div className="flex items-center gap-space-xs rounded-full bg-surface-container-low px-space-sm py-space-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
            <span className="font-mono text-data-mono-sm uppercase text-on-surface-variant">Base Sepolia</span>
          </div>
          <div className="flex items-center gap-space-xs rounded-full bg-surface-container-low px-space-sm py-space-xs">
            <span className="material-symbols-outlined text-sm text-primary-fixed-dim">verified_user</span>
            <span className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
              CertiK Audited
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-space-md">
          <Link className={`hidden md:inline ${navInactive}`} href="#">
            Public Explore
          </Link>
          <Link
            aria-current={activeNav === "login" ? "page" : undefined}
            className={activeNav === "login" ? navActive : navInactive}
            href="/login"
          >
            Sign In
          </Link>
          <Link
            aria-current={activeNav === "register" ? "page" : undefined}
            className={activeNav === "register" ? navActive : navInactive}
            href="/register"
          >
            Sign Up
          </Link>
        </nav>

        <div className="hidden items-center gap-space-md sm:flex">
          <div className="flex items-center gap-space-xs rounded-lg bg-surface-container px-space-sm py-space-xs">
            <span className="font-mono text-data-mono-sm text-on-surface-variant">0x7F...c49A</span>
          </div>
          <Image
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
            height={32}
            src="https://lh3.googleusercontent.com/aida/AEtjO1UAZC3elBZ2qQ9nzpn65KQ38SH3ZBzrVTL9f8BsmFPy1FOJ-ztUjKSOse-WtTxxML9A0toJ_w5kccr5r7ak6s_53pchRTkdqFZ9spUuM9Ex9VltdkTIccm63_tAjRDl0OSIjvVY6CESGYfHOIdYY0qwT88hhGyUWhpb-1ewpc2ictO7c50es6_thWJtwczH0S6uv9Bk5gjcBecjOpZpS8oxRoZDX6aAz7sRtOpQFqHAtCemK9B2iPedyF4"
            width={32}
          />
        </div>
      </div>
    </header>
  );
}

/** @deprecated Use AuthHeader with activeNav="register" */
export function RegisterHeader() {
  return <AuthHeader activeNav="register" />;
}
