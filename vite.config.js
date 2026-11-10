import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { handleSwagstackPayments } from "./api/swagstack-payments.js";

function swagstackPaymentsApi() {
  return {
    name: "swagstack-payments-api",
    configureServer(server) {
      server.middlewares.use("/api/swagstack-payments", (req, res) => {
        handleSwagstackPayments(req, res).catch(() => {
          res.statusCode = 502;
          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify({ ok: false, error: "Payment API failed." }));
        });
      });
    },
  };
}

const pagesBase = process.env.VITE_BASE || "/";

export default defineConfig({
  base: pagesBase,
  plugins: [react(), swagstackPaymentsApi()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
});
