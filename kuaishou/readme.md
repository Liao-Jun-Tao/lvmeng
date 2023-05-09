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
