let {pipeline,get} = require('../utils');

/**
 * req={url,query_obj,headers,proxy=''}
 */
class Spider {
    constructor(req,methods=[]){
        this._req=req;
        this._methods=methods;
    }
    setProxy(proxy){
        this._req.proxy = this._req.proxy||proxy;
    }
    async start(){
        get({...this._req}).then(({response,body})=>{
            pipeline(this._methods)(body);
        }).catch((err)=>{
           throw err
        })
    }

}
module.exports=Spider;

