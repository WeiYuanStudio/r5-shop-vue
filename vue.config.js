module.exports = {
    devServer: {
        // 设置代理
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000/", // 域名
                // target: "https://www.fastmock.site/mock/5c812b8e5135e0f7c5931a0e84860f96/", // mock服务器
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/api": "/api"
                }
            },
            "/user": {
                target: "http://127.0.0.1:8000/", // 域名
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            },
            "/test": {
                target: "http://127.0.0.1:8000/", // 域名
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            },
            "/controller": {
                target: "http://127.0.0.1:8000/", // 域名
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            }
        }
    }
};
