/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['react-simple-captcha']);

module.exports = withTM(nextConfig);
