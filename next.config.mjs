/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {hostname:'randomuser.me'}, 
            {hostname:'cdn-icons-png.flaticon.com'}
        ]
    }
};

export default nextConfig;
