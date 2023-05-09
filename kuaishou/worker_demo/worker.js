// worker 不能操作DOM
// 页面发消息
self.addEventListener('message', (event)=> {
    const message = event.data;
    const result = message + 'World!';
    self.postMessage(result);
})