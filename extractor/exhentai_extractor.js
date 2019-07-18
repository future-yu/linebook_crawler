let {Spider} = require('../crawler')
function getItemInfo(cheerio,crawler) {
   return function (html) {
        let $ = cheerio.load(html);

        $('.gallery a').each((index,item)=>{
            console.log($(item).attr('href'));
        })
        $('.pagination .page').each((index,item)=>{
            crawler.emit('add_spider',new Spider({
                url:'https://nhentai.net/',
                query_obj:{
                    page:$(item).text()
                }
            },[getItemInfo(cheerio,crawler)]))
        });
   }
}


module.exports={
    getItemInfo
};
