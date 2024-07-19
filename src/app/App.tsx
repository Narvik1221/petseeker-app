import React from "react";
import AppRouter from "./router/Router";
import "./ui/main.scss";
import "normalize.css";
import "./lib/i18n";
import "./ui/variables.scss";

const App: React.FC = () => {
  return <AppRouter />;
};

export default App;
