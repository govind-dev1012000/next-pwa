 /** @type {import('next').NextConfig} */

 const withPWA = require('next-pwa')({
  dest: 'public'
})
const nextConfig = {};

// export default nextConfig;



module.exports = withPWA(nextConfig)
