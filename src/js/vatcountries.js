var VATPeriod = require('./vatperiod');
var VATCountry = require('./vatcountry');
var json = require('../json/vatrates.json');

var VATCountries = [];

if (json && json.rates) {
  json.rates.forEach(function(country) {
    var periods = [];

    if (country.periods) {
      country.periods.forEach(function(period) {
        periods.push(new VATPeriod(
          new Date(period.effectiveFrom),
          period.rates.superReduced,
          period.rates.reduced,
          period.rates.standard,
          period.rates.parking
        ));
      });
    }

    VATCountries.push(new VATCountry(
      country.name,
      country.code,
      country.countryCode,
      periods
    ));
  });
}

module.exports = VATCountries;
