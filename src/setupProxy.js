const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/accounts",
    createProxyMiddleware({
      target: "https://kunaikit.herokuapp.com",
      changeOrigin: true,
    })
  );
};
