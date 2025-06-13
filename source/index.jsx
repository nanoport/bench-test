import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <main style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "5rem" }}>
    <h1>🧪 VM Benchmark Dashboard</h1>
    <p>This page was rendered by a minimal React app deployed on Vercel.</p>
    <p><a href="/api/benchmark" target="_blank">Run Benchmark</a></p>
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
