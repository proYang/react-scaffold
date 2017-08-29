# react-scaffold
> 根据vue脚手架项目改装

## description    
**react脚手架** 项目。
- 支持开发环境热更新
- 支持`eslint`实时检测 `(js|jsx)`
- 支持`React`浏览器插件
- 支持移动端相关问题适配（300ms延迟、屏幕大小、兼容等问题）
- 支持`PostCSS`、`CSS-Module`，生产环境针对`CSS`类名做极限压缩处理

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Reference
> 
- [webpack热重载](https://doc.webpack-china.org/guides/hot-module-replacement/)
- [webpack与react的运行时打包与热更新](http://www.chardlau.com/2017/05/04/webpack-and-react-hot-replacement/)    
- [解决reducer更改后热更新](https://github.com/aemoe/fairy/issues/3)
- [高效压缩CSS文件束(bundle)的体积](https://zhuanlan.zhihu.com/p/28019808)
- [vw vh移动端页面的适配](http://www.w3cplus.com/css/vw-for-layout.html)