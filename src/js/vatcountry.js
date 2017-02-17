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
VATCountry.prototype.getName = function() {
  return this._name;
};

/**
 *
 * @returns {string}
 */
VATCountry.prototype.getCode = function() {
  return this._code;
};

/**
 * @returns {string}
 */
VATCountry.prototype.getCountryCode = function() {
  return this._countryCode;
};

/**
 * @returns {VATPeriod[]}
 */
VATCountry.prototype.getPeriods = function() {
  return this._periods;
};

/**
 * Set the date for which to return VAT rates.
 *
 * @param {Date|null} date
 */
VATCountry.prototype.setDate = function(date) {
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
VATCountry.prototype.getPeriod = function(date) {
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
VATCountry.prototype.getCurrentPeriod = function() {
  return this.getPeriod(this._date);
};

/**
 * Did this country use VAT on the given date.
 *
 * @returns {boolean}
 */
VATCountry.prototype.usedVATOnDate = function(date) {
  var period = this.getPeriod(date);

  return !!(period && period.getStandardRate());
};

/**
 * Did this country use VAT on the current date.
 *
 * @returns {boolean}
 */
VATCountry.prototype.usedVATOnCurrentDate = function() {
  return this.usedVATOnDate(this._date);
};

/**
 * Get the super reduced rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getSuperReducedRate = function() {
  var period = this.getCurrentPeriod();

  return (period ? period.getSuperReducedRate() : undefined);
};

/**
 * Get the reduced rate for this country.
 *
 * @returns {number[]|undefined}
 */
VATCountry.prototype.getReducedRates = function() {
  var period = this.getCurrentPeriod();

  return (period ? period.getReducedRates() : undefined);
};

/**
 * Get the standard rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getStandardRate = function() {
  var period = this.getCurrentPeriod();

  return (period ? period.getStandardRate() : undefined);
};

/**
 * Get the parking rate for this country.
 *
 * @returns {number|undefined}
 */
VATCountry.prototype.getParkingRate = function() {
  var period = this.getCurrentPeriod();

  return (period ? period.getParkingRate() : undefined);
};

module.exports = VATCountry;
