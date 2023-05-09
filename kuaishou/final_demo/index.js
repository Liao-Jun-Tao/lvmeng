const fs = require('fs'); // io promise
const logger = require('log4js').getLogger();
// 何为日志 后端的概念
// www.taobao.com 记录下来 谁 用什么设备 去了哪个页面 停留了多久？
// 日活跃 月活 
logger.level = 'info';

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        logger.info('Start reading file...');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error occurred while reading file:`, err)
                reject(err);
            } else {
                logger.info('File reading complete.', data);
                resolve(data);
            }
        })
    })
}


readFile('example.txt').then((data) => {
    console.log(data);
}).catch((err) => {
    console.error('Error:', err);
}).finally(() => {
    logger.info('File reading complete.');
})