/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	eslint: {
		dirs: ["app", "components", "src"],
	},
}

module.exports = nextConfig