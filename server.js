const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    proxy.web(req, res, {
        target: 'http://example.com', // غيّر الهدف هنا
        changeOrigin: true
    });
});

server.listen(PORT, () => {
    console.log(`Proxy running on port ${PORT}`);
});
