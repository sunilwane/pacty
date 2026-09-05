import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Predict. Bet. Settle.</h1>
        <p>
          Pactly combines a modern Web2 experience with on-chain settlement.
          Create predictions, place bets via your wallet, and let smart contracts handle trust.
        </p>
        <Link href="/register" className="btn">
          Get Started
        </Link>
      </section>
    </main>
  );
}
