// vite.config.js
export default {
    server: {
        proxy: {
            '/api': {
                target: 'https://api.jsonbin.io/v3/b/66ae78f2acd3cb34a86f748f',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
}