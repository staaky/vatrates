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
VATPeriod.prototype.getEffectiveFrom = function() {
  return this._effectiveFrom;
};

/**
 * Get the super reduced rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getSuperReducedRate = function() {
  return this._superReduced;
};

/**
 * Get the reduced rates.
 *
 * @returns {number[]|undefined}
 */
VATPeriod.prototype.getReducedRates = function() {
  return this._reduced;
};

/**
 * Get the standard rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getStandardRate = function() {
  return this._standard;
};

/**
 * Get the parking rate.
 *
 * @returns {number|undefined}
 */
VATPeriod.prototype.getParkingRate = function() {
  return this._parking;
};

module.exports = VATPeriod;
