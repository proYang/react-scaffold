// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {
      browsers: ["Android >= 4.0", "iOS >= 4"], //, "ChromeAndroid > 1%"
      cascade: false  // 不美化输出 css
    },
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    },
    // https://github.com/yisibl/postcss-aspect-ratio-mini 修正长宽比
    "postcss-aspect-ratio-mini": {},
    // https://github.com/jonathantneal/postcss-write-svg
    "postcss-write-svg": {} // 解决1px的问题
  }
}
