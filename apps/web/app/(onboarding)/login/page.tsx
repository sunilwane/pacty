import { AuthHeader } from "@/components/onboarding/AuthHeader";
import { LoginForm, LoginStats } from "@/components/onboarding/LoginForm";
import { LoginHero } from "@/components/onboarding/LoginHero";
import { RegisterFooter } from "@/components/onboarding/PerksSidebar";

export default function LoginPage() {
  return (
    <>
      <AuthHeader activeNav="login" />
      <main className="w-full bg-surface pt-16">
        <section className="relative mx-auto w-full max-w-[1200px] overflow-hidden px-screen-margin-mobile py-space-xl lg:px-screen-margin-desktop">
          <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />
          <div className="pointer-events-none absolute right-4 top-1/2 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-10 h-80 w-80 rounded-full bg-tertiary-container/5 blur-3xl" />

          <LoginHero />
          <LoginForm />
          <LoginStats />
        </section>
      </main>
      <RegisterFooter />
    </>
  );
}
