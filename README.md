# vue_test2

> A Vue.js project

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


引入sass全局变量，mixin，function等
首先我们考虑下以下场景：当使用rem开发移动端的时候，你定义了一个方法pxToRem的方法来实现px对rem的转换，然后在工程里为每个.vue文件@import 'public.scss'，得import很多很多很多次，万一public.scss路径变了的话。。。哭都来不及。
这时候sass-resources-loader就来拯救我们了，他可以省去重复性的引入，还支持LESS，POSTCSS等
具体用法如下：

npm install -D sass-resources-loader

首先得找到项目里的build文件夹，找到util.js
添加一下代码

function generateSassResourceLoader() { 
var loaders = [
    cssLoader, 'sass-loader', 
    { 
    loader: 'sass-resources-loader', 
    options: {  
        //单个文件时可以直接使用 path.resolve(__dirname, '../**/**.scss')，多个文件时用数组的形式传入，[path.resolve(__dirname, '../**/**1.scss'),path.resolve(__dirname, '../**/**2.scss')]    
        resources: path.resolve(__dirname, '../src/assets/css/theme.scss')
    }     
    }     
];    
if (options.extract) {      
    return ExtractTextPlugin.extract({        
    use: loaders,
    fallback: 'vue-style-loader'       
    })     } 
else {      
    return ['vue-style-loader'].concat(loaders)     
}   
}
然后还是在当前文件里找到

return {
  css: generateLoaders(),
  postcss: generateLoaders(),
  less: generateLoaders('less'),
  sass: generateLoaders('sass', { indentedSyntax: true }),
  scss: generateLoaders('sass'),
  stylus: generateLoaders('stylus'),
  styl: generateLoaders('stylus')
}
替换成

return {
  css: generateLoaders(),
  postcss: generateLoaders(),
  less: generateLoaders('less'),
  sass: generateSassResourceLoader(),
  scss: generateSassResourceLoader(),
  stylus: generateLoaders('stylus'),
  styl: generateLoaders('stylus')
}
这样就可以在项目里使用sass全局变量，mixin，function了~~