export default function AdminDashboardPage() {
  return (
    <>
      <h1 className="page-title">Admin Dashboard</h1>
      <div className="grid">
        <div className="card">
          <h3>Total Users</h3>
          <p style={{ fontSize: "2rem", marginTop: "0.5rem" }}>0</p>
        </div>
        <div className="card">
          <h3>Active Predictions</h3>
          <p style={{ fontSize: "2rem", marginTop: "0.5rem" }}>0</p>
        </div>
        <div className="card">
          <h3>Total Bets</h3>
          <p style={{ fontSize: "2rem", marginTop: "0.5rem" }}>0</p>
        </div>
      </div>
    </>
  );
}
