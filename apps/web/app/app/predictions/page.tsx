export default function PredictionsPage() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>
          Predictions
        </h1>
        <button className="btn">Create Prediction</button>
      </div>
      <div className="card">
        <p style={{ color: "var(--muted)" }}>No predictions yet. Create your first one!</p>
      </div>
    </>
  );
}
