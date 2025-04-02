import React from "react";
import "./app.css";

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({
  message = "Welcome to Electron-React!",
}) => {
  return <div className="text-green-600 text-xl font-semibold">{message}</div>;
};

export default App;
