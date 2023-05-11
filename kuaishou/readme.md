- 小程序能拿到 dom api 吗？

  - 相对于大厂的 APP ， 依附于他们的
    - 微信小程序， 支付宝小程序， 抖音小程序 快手小程序
  - ios、 android 原生开发中 商品的详情页
    webview 的控件， 带 url 的 html 页面显示
  - 为了把开发效率提升， 基于 webview 可以跨平台的应用程序
    html 体验不太好
  - wsml wxss js 前端开发的体验， 跨平台编译成 APP 能显示的小程序
  - wx. 拿到原生 app 的功能
  - 拿不到 DOM api 的

- 微信小程序缺点？
  有学习成本
  HBase uniapp

- finally 有什么用
  大型语言 try {} catch() {} finally
  1. promise 失败后
  - 应用场景
    all race any allSettled finally
    Promise.resolve/reject
  2. 有些应用不只是耗时
     i/o 操作要关闭文件句柄...  

-Promise then 第二个参数 和catch的区别是？
    - catch
        .then(()=>{}, ()=>{
        
        })
        更简洁 推荐 


## 快手的二面
    深入的工程化
    code spliting

    - css 代码的分离
        更好的缓存
        下载的速度更快
        MiniCssExtractPlugin
    - 怎么再优化一下 
       - css压缩
       - tree shaking webpack5 默认再production mode 自动   开启
       注释、console.log()调试， 没有使用的变量或函数 模块中没有用的代码 
       - code spliting
         vendor 
    - 图片怎么优化， webpack如何结合？
      - 减少请求数