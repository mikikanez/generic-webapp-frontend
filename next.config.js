/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	env: {
		NEXT_PUBLIC: "http://localhost:8000/api/",
	},
	modularizeImports: {
		"@mui/material": {
			transform: "@mui/material/{{member}}",
		},
		"@mui/icons-material": {
			transform: "@mui/icons-material/{{member}}",
		},
		"@mui/styles": {
			transform: "@mui/styles/{{member}}",
		},
		"@mui/lab": {
			transform: "@mui/lab/{{member}}",
		},
	},
	images: {
		domains: ["localhost", "127.0.0.1"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
