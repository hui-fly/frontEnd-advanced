# 深入理解JS的轮询原理

## 宏任务
## 微任务
```js
console.log('----------------- start -----------------');
setTimeout(() => {
    console.log('setTimeout');
}, 0)
new Promise((resolve, reject) =>{  // new Promise(xx)相当于同步任务, 会立即执行, .then后面的是微任务
    resolve();  
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}).then(() => {  
    console.log('promise实例成功回调执行');
})
console.log('----------------- end -----------------');
```