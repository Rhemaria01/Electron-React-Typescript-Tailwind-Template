import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// We find our app DOM element as before
const app = document.getElementById("app");

// You can see how we can mix html and nested components together

if (app) {
  const root = ReactDOM.createRoot(app);
  // Finally, we render our top-level component to the actual DOM.
  root.render(<App />);
}
