const { defineConfig } = require("@vue/cli-service");
const dotenv = require("dotenv");
module.exports = defineConfig({
  configureWebpack: () => {
    dotenv.config();
  },
  transpileDependencies: true,
  devServer: {
    port: 8080,
  },
});
