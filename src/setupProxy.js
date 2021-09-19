const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/twitter",
    createProxyMiddleware({
      target: "https://kunaikit.herokuapp.com",
      changeOrigin: true,
    })
  );
};
