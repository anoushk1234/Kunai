const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
module.exports = function (app) {
  app.use("/", express.static(__dirname + "/server/build")),
    app.use(
      "/accounts",
      createProxyMiddleware({
        target: "https://kunaikit.herokuapp.com",
        changeOrigin: true,
      })
    );
};
