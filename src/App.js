// import PageLoader from "src/common/PageLoader/PageLoader";
import PageLoader from "";
import React from "react";
import AppRoutes from "routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PageLoader />
      <AppRoutes />
    </div>
  );
}

export default App;
