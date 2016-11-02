'use strict';
var accessor = require('./accessor');

module.exports.loadFamilia = function (client, familia) {
  const params = {
    action: 'query',
    titles: familia,
    prop: 'revisions',
    rvlimit: 1,
    rvprop: 'content'
  };
  var self = this;
  client.api.call(params, function (err, info, next, data) {
    if (err) {
      console.log(err);
      return;
    }
    const links = self.parseQueryData(data);
    // todo dispatch load species event
  });
};

module.exports.parseQueryData = function (str) {
  let links = [];
  let text = accessor.getContentFromQuery(str);
  if (text) {
    const regex = /Genera:.*/g;
    let m;

    while ((m = regex.exec(text)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      if (m[0] !== undefined) {
        let generaRaw = m[0].substr(m[0].indexOf('{')).trim().split('}} {{');
        generaRaw.forEach(function (link) {
          const splitted = link.split('|');
          if (splitted.length > 0) {
            links.push(splitted[1].replace(/\}/gm, '').trim());
          }
        });
      }
    }
    return links;
  }
};