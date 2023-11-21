const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE.ENV === "production" ? "/interno-vuecli/" : "/",
  transpileDependencies: true,
});
