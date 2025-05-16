/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['bcryptjs', 'postgres'],
  },
};

export default nextConfig;





// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// module.exports = {
//   experimental: {
//     serverComponentsExternalPackages: ['bcryptjs', 'postgres']
//   }
// }