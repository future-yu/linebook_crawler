let {getRemoteProxy,get} = require('../utils')

// getRemoteProxy().then((data)=>{
//     console.log(data)
// })
// get({
//     url:'http://nodejs.cn/api/events.html',
//     query_obj:null,
//     headers:null,
//     proxy:'http://120.83.106.46:9999'
// }).then(({response,body})=>{
//     console.log(body)
// }).catch((err)=>{
//     throw err
// })


let obj ={
    a:1,
    b:2
}
console.log(Object.keys(obj).length)
