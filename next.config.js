/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // ...other Next.js configuration options...

    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            // Add MiniCssExtractPlugin to extract CSS into separate files
            config.plugins.push(new MiniCssExtractPlugin({
                filename: 'static/css/[name].[fullhash:8].css',
                chunkFilename: 'static/css/[name].[fullhash:8].chunk.css',
            }));
        }

        return config;
    },
};
