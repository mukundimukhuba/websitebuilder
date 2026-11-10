import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SwagStackApp from "./swagstack/SwagStackApp.jsx";
import { studioPath, withBase } from "./swagstack/lib/path.js";

// Dedicated Studio repo: send bare "/" to the Studio landing.
if (typeof window !== "undefined" && studioPath() === "/") {
  window.history.replaceState({ swagstack: withBase("/studio") }, "", withBase("/studio"));
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SwagStackApp />
  </StrictMode>
);
