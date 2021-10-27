const TikTokScraper = require('tiktok-scraper');
const needle = require('needle')

var options = {
    headers: {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
        "referer": "https://www.tiktok.com/",
        "cookie": "tt_webid_v2=689854141086886123"
    },
    noWaterMark: true
}

exports.Tiktok = url => new Promise((resolve, reject) => {
    //if (!url) reject('')
    TikTokScraper.getVideoMeta(url, options)
        .then(videoMeta => {
              resolve(videoMeta);
        }).catch (error => {
              reject(String(error));
        })
})

