let {getRemoteProxy,getProxyUrl,isExpire} = require('../utils');
const EventEmitter = require('events');

let Spider = require('./spider');
class Crawler extends EventEmitter{
    async _addProxy(){
        let proxy = await getRemoteProxy();
        let _this = this;
        proxy.forEach((item)=>{
            _this.proxy[`http://${item.ip}:${item.port}`]=item.expire_time
        });
    }
    async _checkProxy(){
        if(Object.keys(this.proxy).length<6){
            await this._addProxy()
        }
    }
    async addSpider(spider){
        await this._checkProxy();
        let cProxy = getProxyUrl(this.proxy);
        if(!isExpire(cProxy.expire_time)){
            spider.setProxy(cProxy.dist);
            spider.start()
        }else {
            delete this.proxy[cProxy.dist];
            this.addSpider(spider)
        }
    }
}
Crawler.prototype.proxy={};

let crawler = new Crawler();

module.exports={
    crawler,
    Spider
}
