const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(domains) {
//   const DNSStatsObj = {};
//   if(DNSStatsObj.length == 0)  {
//     return DNSStatsObj;
//   }

//   domains.forEach((domain) =>  {
//     const subDomains = domain.split('.').reverse();

//     let current = '';
//     subDomains.forEach((subDomain) =>  {
//       current = `${current}${subDomain}`;
//       DNSStatsObj[current] = (DNSStatsObj[current] || 0) + 1;
//     });
//   });
//   return DNSStatsObj;
// }

function getDNSStats(domains) {
  const DNSStatsObj = {};
  for (let i = 0; i < domains.length; i += 1) {
    const subDomains = domains[i].split('.').reverse();

    let key = '';

    for (let j = 0; j < subDomains.length; j += 1) {
      key += `.${subDomains[j]}`;
      DNSStatsObj[key] = (DNSStatsObj[key] || 0) + 1;
    }
  }
  return DNSStatsObj;
}

module.exports = {
  getDNSStats
};
