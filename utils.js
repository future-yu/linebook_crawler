const request = require('request');
const {HEADERS} = require('./config/config');
async function get({url,query_obj,headers,proxy=''}) {
   return new Promise((resolve, reject)=>{
       let req_obj={
           url,
           qs:query_obj||{},
           headers:Object.assign({},headers||{},HEADERS),
           proxy
       };
       request(req_obj,function (err,res,body) {
           if(err){
               reject(err)
           }
           resolve({
               response:res,
               body
           })
       })
   })
}

async function getRemoteProxy(){
    let proxy_url = 'http://webapi.http.zhimacangku.com/getip';
    let obj = {
        num:20,
        type:2,
        pro:0,
        city: '0',
        yys: '0',
        port: '1',
        pack: '52796',
        ts: '1',
        ys: '0',
        cs: '0',
        lb: '1',
        sb: '0',
        pb: '4',
        mr: '1',
        regions: '310000'
    };
    try {
        let {response,body} = await get({url:proxy_url,query_obj:obj});
        let data =JSON.parse(body);
        if(data.code==0){
            return data.data;
        }else {
            throw new Error(data.msg);
        }
    }catch (e) {
        throw e;
    }
}

function isExpire(date){
    return Date.now()-Date.parse(date)>0
}

function pipeline(funcs) {
    return (val) => {
        return funcs.reduce((a, b) => {
            return b(a);
        }, val)
    };
}

function getProxyUrl(proxy_obj){
    let proxy_arr = [];
    for (let url in proxy_obj){
        proxy_arr.push({
            dist:url,
            expire_time:proxy_obj[url]
        })
    }
    return proxy_arr[Math.round((Math.random()*(proxy_arr.length-1)))]
}

module.exports={
    get,
    getProxyUrl,
    getRemoteProxy,
    pipeline,
    isExpire
};


