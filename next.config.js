/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	env: {
		//NEXT_PUBLIC: "https://gw.covcontrol.net/api/",
		NEXT_PUBLIC: "http://127.0.0.1:8000/api/",
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
		domains: ["localhost", "127.0.0.1", "gw.covcontrol.net"],
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
