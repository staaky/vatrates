/*!
 * VATRates v2.0.3
 * MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VATRates"] = factory();
	else
		root["VATRates"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"rates":[{"name":"Austria","code":"AT","countryCode":"AT","periods":[{"effectiveFrom":"2016-01-01","rates":{"reduced":[10,13],"standard":20,"parking":13}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[10],"standard":20,"parking":12}}]},{"name":"Belgium","code":"BE","countryCode":"BE","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[6,12],"standard":21,"parking":12}}]},{"name":"Bulgaria","code":"BG","countryCode":"BG","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[9],"standard":20}}]},{"name":"Croatia","code":"HR","countryCode":"HR","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,13],"standard":25}}]},{"name":"Cyprus","code":"CY","countryCode":"CY","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,9],"standard":19}}]},{"name":"Czech Republic","code":"CZ","countryCode":"CZ","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[10,15],"standard":21}}]},{"name":"Denmark","code":"DK","countryCode":"DK","periods":[{"effectiveFrom":"0000-01-01","rates":{"standard":25}}]},{"name":"Estonia","code":"EE","countryCode":"EE","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[9],"standard":20}}]},{"name":"Germany","code":"DE","countryCode":"DE","periods":[{"effectiveFrom":"2021-01-01","rates":{"reduced":[7],"standard":19}},{"effectiveFrom":"2020-07-01","rates":{"reduced":[5],"standard":16}},{"effectiveFrom":"2007-01-01","rates":{"reduced":[7],"standard":19}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[7],"standard":16}}]},{"name":"Greece","code":"EL","countryCode":"GR","periods":[{"effectiveFrom":"2016-06-01","rates":{"reduced":[6,13],"standard":24}},{"effectiveFrom":"2015-01-01","rates":{"reduced":[6,13],"standard":23}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[6.5,13],"standard":23}}]},{"name":"Finland","code":"FI","countryCode":"FI","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[10,14],"standard":24}}]},{"name":"France","code":"FR","countryCode":"FR","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":2.1,"reduced":[5.5,10],"standard":20}}]},{"name":"Hungary","code":"HU","countryCode":"HU","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,18],"standard":27}}]},{"name":"Ireland","code":"IE","countryCode":"IE","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":4.8,"reduced":[9,13.5],"standard":23,"parking":13.5}}]},{"name":"Italy","code":"IT","countryCode":"IT","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":4,"reduced":[5,10],"standard":22}}]},{"name":"Latvia","code":"LV","countryCode":"LV","periods":[{"effectiveFrom":"2018-01-01","rates":{"superReduced":5,"reduced":[12],"standard":21}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[12],"standard":21}}]},{"name":"Lithuania","code":"LT","countryCode":"LT","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,9],"standard":21}}]},{"name":"Luxembourg","code":"LU","countryCode":"LU","periods":[{"effectiveFrom":"2016-01-01","rates":{"superReduced":3,"reduced":[8],"standard":17,"parking":14}},{"effectiveFrom":"2015-01-01","rates":{"superReduced":3,"reduced":[8,14],"standard":17,"parking":12}},{"effectiveFrom":"0000-01-01","rates":{"superReduced":3,"reduced":[6,12],"standard":15,"parking":12}}]},{"name":"Malta","code":"MT","countryCode":"MT","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,7],"standard":18}}]},{"name":"Netherlands","code":"NL","countryCode":"NL","periods":[{"effectiveFrom":"2019-01-01","rates":{"reduced":[9],"standard":21}},{"effectiveFrom":"2012-01-01","rates":{"reduced":[6],"standard":21}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[6],"standard":19}}]},{"name":"Poland","code":"PL","countryCode":"PL","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,8],"standard":23}}]},{"name":"Portugal","code":"PT","countryCode":"PT","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[6,13],"standard":23,"parking":13}}]},{"name":"Romania","code":"RO","countryCode":"RO","periods":[{"effectiveFrom":"2017-01-01","rates":{"reduced":[5,9],"standard":19}},{"effectiveFrom":"2016-01-01","rates":{"reduced":[5,9],"standard":20}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[5,9],"standard":24}}]},{"name":"Slovakia","code":"SK","countryCode":"SK","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[10],"standard":20}}]},{"name":"Slovenia","code":"SI","countryCode":"SI","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[9.5],"standard":22}}]},{"name":"Spain","code":"ES","countryCode":"ES","periods":[{"effectiveFrom":"0000-01-01","rates":{"superReduced":4,"reduced":[10],"standard":21}}]},{"name":"Sweden","code":"SE","countryCode":"SE","periods":[{"effectiveFrom":"0000-01-01","rates":{"reduced":[6,12],"standard":25}}]},{"name":"United Kingdom","code":"UK","countryCode":"GB","periods":[{"effectiveFrom":"2011-01-04","rates":{"reduced":[5],"standard":20}},{"effectiveFrom":"2010-01-01","rates":{"reduced":[5],"standard":17.5}},{"effectiveFrom":"2008-12-01","rates":{"reduced":[5],"standard":15}},{"effectiveFrom":"1991-03-19","rates":{"reduced":[8],"standard":17.5}},{"effectiveFrom":"0000-01-01","rates":{"reduced":[8],"standard":15}}]}]}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VATPeriod = __webpack_require__(3);
var VATCountry = __webpack_require__(2);
var json = __webpack_require__(0);

var VATCountries = [];

if (json && json.rates) {
  json.rates.forEach(function (country) {
    var periods = [];

    if (country.periods) {
      country.periods.forEach(function (period) {
        periods.push(new VATPeriod(new Date(period.effectiveFrom), period.rates.superReduced, period.rates.reduced, period.rates.standard, period.rates.parking));
      });
    }

    VATCountries.push(new VATCountry(country.name, country.code, country.countryCode, periods));
  });
}

module.exports = VATCountries;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * VATCountry
 *
 * @param {string} name
 * @param {string} code
 * @param {string} countryCode
 * @param {VATPeriod[]} periods
 * @param {Date} [date]
 */
function VATCountry(name, code, countryCode, periods, date) {
  this._name = name;
  this._code = code;
  this._countryCode = countryCode;
  this._periods = periods;

  this.setDate(date);
}

/**
 * @returns {string}
 */
VATCountry.prototype.getName = function () {
  return this._name;
};

/**
 *
 * @returns {string}
 */
VATCountry.prototype.getCode = function () {
  return this._code;
};

/**
 * @returns {string}
 */
VATCountry.prototype.getCountryCode = function () {
  return this._countryCode;
};

/**
 * @returns {VATPeriod[]}
 */
VATCountry.prototype.getPeriods = function () {
  return this._periods;
};

/**
 * Set the date for which to return VAT rates.
 *
 * @param {Date|null} date
 */
VATCountry.prototype.setDate = function (date) {
  if (!date) {
    date = new Date();
  }
  this._date = date;
};

/**
 * Get the VATPeriod matching the given date.
 *
 * @param date
 * @returns {VATPeriod|undefined}
 */
VATCountry.prototype.getPeriod = function (date) {
  var resultPeriod;

  for (var i = this._periods.length - 1; i >= 0; i--) {
    var period = this._periods[i];

    if (period.getEffectiveFrom() <= date) {
      resultPeriod = period;
    }
  }

  return resultPeriod;
};

/**
 * Get the VATPeriod matching the current date.
 *
 * @returns {VATPeriod||undefined}
 */
VATCountry.prototype.getCurrentPeriod = function () {
  return this.getPeriod(this._date);
};

/**
 * Did this country use VAT on the given date.
 *
 * @returns {boolean}
 */
VATCountry.prototype.usedVATOnDate = function (date) {
  var period = this.getPeriod(date);

  return !!(period && period.getStandardRate());
};

/**
 * Did this country use VAT on the current date.
 *
 * @returns {boolean}
 */
VATCountry.prototype.usedVATOnCurrentDate = function () {
  return this.usedVATOnDate(this._date);
};

/**
 * Get the super reduced rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getSuperReducedRate = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getSuperReducedRate() : undefined;
};

/**
 * Get the reduced rate for this country.
 *
 * @returns {number[]|undefined}
 */
VATCountry.prototype.getReducedRates = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getReducedRates() : undefined;
};

/**
 * Get the standard rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getStandardRate = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getStandardRate() : undefined;
};

/**
 * Get the parking rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getParkingRate = function () {
  var period = this.getCurrentPeriod();

  return period ? period.getParkingRate() : undefined;
};

module.exports = VATCountry;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * VATPeriod
 *
 * @param {Date} effectiveFrom
 * @param {number|undefined} [superReduced]
 * @param {array|undefined} [reduced]
 * @param {number|undefined} [standard]
 * @param {number|undefined} [parking]
 */
function VATPeriod(effectiveFrom, superReduced, reduced, standard, parking) {
  this._effectiveFrom = effectiveFrom;
  this._superReduced = superReduced;
  this._reduced = reduced;
  this._standard = standard;
  this._parking = parking;
}

/**
 * Get the Date from which this period is effective.
 *
 * @returns {Date}
 */
VATPeriod.prototype.getEffectiveFrom = function () {
  return this._effectiveFrom;
};

/**
 * Get the super reduced rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getSuperReducedRate = function () {
  return this._superReduced;
};

/**
 * Get the reduced rates.
 *
 * @returns {number[]|undefined}
 */
VATPeriod.prototype.getReducedRates = function () {
  return this._reduced;
};

/**
 * Get the standard rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getStandardRate = function () {
  return this._standard;
};

/**
 * Get the parking rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getParkingRate = function () {
  return this._parking;
};

module.exports = VATPeriod;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var json = __webpack_require__(0);
var VATCountries = __webpack_require__(1);

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
VATRates.prototype.setDate = function (date) {
  if (!date) {
    date = new Date();
  } else if (typeof date === 'string') {
    date = new Date(date);
  }

  this._date = date;

  // set this date on all countries
  var countries = [];

  this._countries.forEach(function (country) {
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
VATRates.prototype.getCountries = function (includeNoLongerUsingVAT) {
  if (includeNoLongerUsingVAT) {
    return this._countries;
  }

  var countries = [];

  this._countries.forEach(function (country) {
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
VATRates.prototype.getCountry = function (countryCode) {
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
VATRates.prototype.isVATCountry = function (countryCode) {
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
VATRates.prototype.getSuperReducedRate = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
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
VATRates.prototype.getReducedRates = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
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
VATRates.prototype.getStandardRate = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
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
VATRates.prototype.getParkingRate = function (countryCode) {
  var country, result;
  if (country = this.getCountry(countryCode)) {
    result = country.getParkingRate();
  }
  return result;
};

/**
 * The raw JSON data.
 *
 * @returns {Object}
 */
VATRates.prototype.getJSON = function () {
  return json;
};

module.exports = VATRates;

/***/ })
/******/ ]);
});