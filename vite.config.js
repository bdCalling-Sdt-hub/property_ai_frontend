import dotenv from "dotenv";
dotenv.config();
const VITE_HOST = process.env.VITE_HOST;
const VITE_PORT = process.env.VITE_PORT;
const APP_NAME = process.env.APP_NAME;
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
console.log(`${APP_NAME} has started on http://${VITE_HOST}:${VITE_PORT}`);
export default defineConfig({
  plugins: [react()],
  server: {
    host: VITE_HOST,
    port: VITE_PORT,
  },
});
