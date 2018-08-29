// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()

// This file is not going through babel transformation.
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/MainContent": { page: "/MainContent" },
      "/Portfolio": { page: "/Portfolio" },
      "/Skills": { page: "/Skills" }
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/myportfolio/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
  
}
