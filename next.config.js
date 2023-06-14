/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
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
		domains: ["localhost"],
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
