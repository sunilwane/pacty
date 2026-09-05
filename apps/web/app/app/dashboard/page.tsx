export default function DashboardPage() {
  return (
    <>
      <h1 className="page-title">Dashboard</h1>
      <div className="grid">
        <div className="card">
          <h3>Active Predictions</h3>
          <p style={{ fontSize: "2rem", marginTop: "0.5rem" }}>0</p>
        </div>
        <div className="card">
          <h3>Your Bets</h3>
          <p style={{ fontSize: "2rem", marginTop: "0.5rem" }}>0</p>
        </div>
        <div className="card">
          <h3>Groups</h3>
          <p style={{ fontSize: "2rem", marginTop: "0.5rem" }}>0</p>
        </div>
      </div>
    </>
  );
}
