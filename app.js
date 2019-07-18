let cheerio = require('cheerio')
let {crawler,Spider} = require('./crawler');
let {getItemInfo} = require('./extractor/exhentai_extractor')

crawler.on('add_spider',function (spider) {
    crawler.addSpider(spider)
});
let test_spider = new Spider({
    url:'https://nhentai.net/'
},[getItemInfo(cheerio,crawler)]);
crawler.addSpider(test_spider);

