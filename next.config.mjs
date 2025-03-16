/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId: async () => {
        return process.env.GIT_HASH;
        // <- Note: This could be anything, using the latest git hash
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
export default nextConfig;
