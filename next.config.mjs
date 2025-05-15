/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [
            {source:"/embed",
                headers:[
                    {
                    key:"Contect-Security-Policy",
                    value:"frame-src"
                    }
                ]

            }
        ]
    }
};

export default nextConfig;
