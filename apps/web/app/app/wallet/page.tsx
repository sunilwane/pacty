export default function WalletPage() {
  return (
    <>
      <h1 className="page-title">Wallet</h1>
      <div className="card">
        <p style={{ color: "var(--muted)", marginBottom: "1rem" }}>
          Connect your wallet to place bets on-chain via wagmi + viem.
        </p>
        <button className="btn">Connect Wallet</button>
      </div>
    </>
  );
}
