Promise
    .resolve()
    .then(function () {
        throw new Error('外部报错');
    }, function () {
        console.log('This in never called');
    }).catch(err => {
        console.log('捕捉到错误', err.message);
    })