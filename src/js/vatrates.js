var json = require('../json/vatrates.json');
var VATCountries = require('./vatcountries');

/**
 * VATRates
 *
 * @param {Date} [date]
 */
function VATRates(date) {
  this._countries = VATCountries;
  this.setDate(date);
}

/**
 * @param {Date|string} date
 */
VATRates.prototype.setDate = function(date) {
  if (!date) {
    date = new Date();
  } else if (typeof date === 'string') {
    date = new Date(date);
  }

  this._date = date;

  // set this date on all countries
  var countries = [];

  this._countries.forEach(function(country) {
    country.setDate(date);
    countries.push(country);
  });

  this._countries = countries.length > 0 ? countries : undefined;
};

/**
 * Get the countries that used VAT at the current date.
 * Optionally include countries that no longer use VAT.
 *
 * @param {boolean} [includeNoLongerUsingVAT]
 * @return {VATCountry[]}
 */
VATRates.prototype.getCountries = function(includeNoLongerUsingVAT) {
  if (includeNoLongerUsingVAT) {
    return this._countries;
  }

  var countries = [];

  this._countries.forEach(function(country) {
    if (country.usedVATOnCurrentDate()) {
      countries.push(country);
    }
  });

  return countries;
};

/**
 * Find a country that used VAT at the current date.
 *
 * @param {string} countryCode The country code to look for.
 * @returns {VATCountry|undefined} Returns the matched VATCountry, else `undefined`.
 */
VATRates.prototype.getCountry = function(countryCode) {
  countryCode = countryCode.toUpperCase();
  var countries = this.getCountries(),
      country;

  for (var i = 0; i < countries.length; i++) {
    if (countries[i].getCode() === countryCode || countries[i].getCountryCode() === countryCode) {
      country = countries[i];
    }
  }

  return country;
};

/**
 * Check if a country used VAT at the current date.
 *
 * @param {string} countryCode
 * @returns {boolean}
 */
VATRates.prototype.isVATCountry = function(countryCode) {
  // A country needs at least a standard rate at the current date.
  // This way we can remove countries from EU/VAT by adding a `period` without rates to the JSON.
  var country = this.getCountry(countryCode);

  return !!(country && country.usedVATOnCurrentDate());
};

/**
 * Get the super reduced rate for a country.
 *
 * @param {string} countryCode
 * @returns {number|undefined} Returns a number or `undefined`.
 */
VATRates.prototype.getSuperReducedRate = function(countryCode) {
  var country, result;
  if ((country = this.getCountry(countryCode))) {
    result = country.getSuperReducedRate();
  }
  return result;
};

/**
 * Get the reduced rates for a country.
 *
 * @param {string} countryCode
 * @returns {number[]|undefined} Returns an Array of numbers, else `undefined`.
 */
VATRates.prototype.getReducedRates = function(countryCode) {
  var country, result;
  if ((country = this.getCountry(countryCode))) {
    result = country.getReducedRates();
  }
  return result;
};

/**
 * Get the standard rate for a country.
 *
 * @param {string} countryCode
 * @returns {number|undefined} Returns a number or `undefined`.
 */
VATRates.prototype.getStandardRate = function(countryCode) {
  var country, result;
  if ((country = this.getCountry(countryCode))) {
    result = country.getStandardRate();
  }
  return result;
};

/**
 * Get the parking rate for a country.
 *
 * @param {string} countryCode
 * @returns {number|undefined} Returns a number or `undefined`.
 */
VATRates.prototype.getParkingRate = function(countryCode) {
  var country, result;
  if ((country = this.getCountry(countryCode))) {
    result = country.getParkingRate();
  }
  return result;
};

/**
 * The raw JSON data.
 *
 * @returns {Object}
 */
VATRates.prototype.getJSON = function() {
  return json;
};

module.exports = VATRates;
