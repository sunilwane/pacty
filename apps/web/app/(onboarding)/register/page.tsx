import { AuthHeader } from "@/components/onboarding/AuthHeader";
import { FaucetBanner, RegisterHero } from "@/components/onboarding/RegisterHero";
import { RegistrationForm } from "@/components/onboarding/RegistrationForm";
import { PerksSidebar, RegisterFooter } from "@/components/onboarding/PerksSidebar";

export default function RegisterPage() {
  return (
    <>
      <AuthHeader activeNav="register" />
      <main className="w-full bg-surface pt-16">
        <div className="relative mx-auto w-full max-w-[1200px] px-screen-margin-mobile py-space-xl lg:px-screen-margin-desktop">
          <div className="pointer-events-none absolute -left-20 -top-12 h-96 w-96 rounded-full bg-primary-container/5 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-secondary-container/5 blur-[130px]" />

          <RegisterHero />
          <FaucetBanner />

          <div className="grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
            <RegistrationForm />
            <PerksSidebar />
          </div>
        </div>
      </main>
      <RegisterFooter />
    </>
  );
}
