var Crawler = require('./lib/crawler/crawler');

var options = {
  /* eslint new-cap: "off" */
  protocol: 'https',
  server: 'species.wikimedia.org',
  path: '/w',
  userAgent: 'scientificNameBot 0.0'
};
var title = 'Anthipes'; // Muscicapidae

var crawler = new Crawler(options);
crawler.crawl(title);
