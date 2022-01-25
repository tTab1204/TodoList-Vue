module.exports = {
  // initialize scss variables for the whole project
  css: {
    loaderOptions: {
      sass: {
        // 먼저 가져와야 하는 파일을 명시한 속성
        prependData: `@import "@/assets/scss/index.scss";`,
      },
    },
  },

  // Generating source map js
  productionSourceMap: true,

  // stoping ESlint
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
