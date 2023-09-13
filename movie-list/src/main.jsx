import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovielistProvider } from "./providers/MovieListProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovielistProvider>
      <App />
    </MovielistProvider>
  </React.StrictMode>
);
