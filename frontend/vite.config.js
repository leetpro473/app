import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		// Get rid of the CORS error
		proxy: {
			"/api": {
				target: "http://76.76.21.142ss:5000",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
