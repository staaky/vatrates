var chai = require('chai');
var expect = chai.expect;
var VATRates = require('../../dist/vatrates');
var VATCountry = require('../../src/js/vatcountry');

var validISOCodes = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'DE', 'GR', 'FI', 'FR', 'HU', 'IE', 'IT', 'LV', 'LU',
  'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'
];

describe('VATRates()', function() {
  var vatRates;
  beforeEach(function() {
    vatRates = new VATRates();
  });

  it('should accept a Date and return correct rates for it', function() {
    vatRates = new VATRates(new Date('2011-01-01'));
    expect(vatRates.getStandardRate('NL')).to.equal(19);
  });
  it('should accept a string which it converts into a Date', function() {
    vatRates = new VATRates('2011-01-01');
    expect(vatRates.getStandardRate('NL')).to.equal(19);
  });

  describe('.setDate()', function() {
    it('should accept a Date and return correct rates for it', function() {
      vatRates.setDate(new Date('2015-01-01'));
      expect(vatRates.getStandardRate('RO')).to.equal(24);
    });

    it('should accept a string which it converts into a Date', function() {
      vatRates.setDate('2015-01-01');
      expect(vatRates.getStandardRate('RO')).to.equal(24);
    });
  });

  describe('.isVATCountry()', function() {
    it('should return true for EU VAT countries', function() {
      expect(vatRates.isVATCountry('NL')).to.equal(true);
    });
    it('should return false for non VAT countries', function() {
      expect(vatRates.isVATCountry('CN')).to.equal(false);
    });
  });

  describe('.getCountry()', function() {
    it('should return undefined for invalid country codes', function() {
      expect(vatRates.getCountry('XX')).to.be.a('undefined');
    });

    it("should return a VATCountry when given a valid country code", function() {
      expect(vatRates.getCountry('NL')).to.be.a('object');
    });

    it("should accept a lowercase countryCode", function() {
      expect(vatRates.getCountry('nl').getCountryCode()).to.equal('NL');
    });
  });

  describe('.getCountries()', function() {
    it('should return an array', function() {
      var countries = vatRates.getCountries();
      expect(countries).to.be.a('array');
    });
  });

  describe('.getSuperReducedRate()', function() {
    it('should return undefined for Austria (AT) on 2017-01-01', function() {
      vatRates.setDate('2017-01-01');
      expect(vatRates.getSuperReducedRate('AT')).to.be.a('undefined');
    });
  });

  describe('.getReducedRates()', function() {
    it('should return an array', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getReducedRates('GR')).to.be.a('array').with.lengthOf(2);
    });

    it('should return [6, 12] for Luxembourg on 2014-01-01', function() {
      vatRates.setDate('2014-01-01');
      expect(vatRates.getReducedRates('LU')).eql([6, 12]);
    });

    it('should return [6.5, 13] for Greece on 2011-01-01', function() {
      vatRates.setDate('2011-01-01');
      expect(vatRates.getReducedRates('GR')).eql([6.5, 13]);
    });
  });

  describe('.getStandardRate()', function() {
    it('should return a number', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getStandardRate('NL')).to.be.a('number').to.equal(21);
    });
  });

  describe('.getParkingRate()', function() {
    it('should return 13 for Portugal on 2016-01-01', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getParkingRate('PT')).to.equal(13);
    });
    it('should return `undefined` for Denmark on 2016-01-01', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getParkingRate('DK')).to.be.a('undefined');
    })
  });

  describe('.getJSON', function() {
    it('should return an object with property `rates`', function() {
      expect(vatRates.getJSON()).to.be.a('object').with.property('rates');
    });
  });
});


describe('VATCountry()', function() {
  var vatRates;
  before(function() {
    vatRates = new VATRates();
  });

  describe('.getName()', function() {
    it('should return a string with the name of the country', function() {
      expect(vatRates.getCountry('DE').getName()).to.be.a('string').to.equal("Germany");
    });
  });

  describe('.getCode()', function() {
    it('should return `UK` given countryCode `GB`', function() {
      expect(vatRates.getCountry('GB').getCode()).to.equal('UK');
    });

    it('should return `EL` given countryCode `GR`', function() {
      expect(vatRates.getCountry('GR').getCode()).to.equal('EL');
    });
  });

  describe('.getCountryCode()', function() {
    it('should return valid ISO codes for all countries', function() {
      validISOCodes.forEach(function(isoCode) {
        expect(vatRates.getCountry(isoCode).getCountryCode()).to.equal(isoCode);
      });
    });

    it('should return `GB` given code `UK`', function() {
      expect(vatRates.getCountry('UK').getCountryCode()).to.equal('GB');
    });

    it('should return `GR` given code `EL`', function() {
      expect(vatRates.getCountry('EL').getCountryCode()).to.equal('GR');
    });
  });

  describe('.getSuperReducedRate', function() {
    it('should return 4.8 for Ireland on 2016-01-01', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getCountry('IE').getSuperReducedRate()).to.equal(4.8);
    });
    it('should return `undefined` for Austria on 2011-01-01', function() {
      vatRates.setDate('2011-01-01');
      expect(vatRates.getCountry('AT').getSuperReducedRate()).to.be.a('undefined');
    });
  });

  describe('.getReducedRates', function() {
    it('should return an array', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getCountry('GR').getReducedRates()).to.be.a('array').with.lengthOf(2);
    });

    it('should return [6, 12] for Luxembourg on 2014-01-01', function() {
      vatRates.setDate('2014-01-01');
      expect(vatRates.getCountry('LU').getReducedRates()).eql([6, 12]);
    });

    it('should return [6.5, 13] for Greece on 2011-01-01', function() {
      vatRates.setDate('2011-01-01');
      expect(vatRates.getCountry('GR').getReducedRates()).eql([6.5, 13]);
    });
  });

  describe('.getStandardRate()', function() {
    it('should return a number', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getCountry('NL').getStandardRate()).to.be.a('number').to.equal(21);
    });
  });

  describe('.getParkingRate()', function() {
    it('should return 13 for Portugal on 2016-01-01', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getCountry('PT').getParkingRate()).to.equal(13);
    });
    it('should return `undefined` for Denmark on 2016-01-01', function() {
      vatRates.setDate('2016-01-01');
      expect(vatRates.getCountry('DK').getParkingRate()).to.be.a('undefined');
    });
  });

  describe('limitedCutsForGermany', function() {
    it('should return 16% and 5% after 2020-07-01', function() {
      vatRates.setDate('2020-07-01');
      expect(vatRates.getCountry('DE').getStandardRate()).to.equal(16);
      expect(vatRates.getCountry('DE').getReducedRates()).to.eql([5]);
    });

    it('should return 19% and 7% again after 2021-01-01', function() {
      vatRates.setDate('2021-01-01');
      expect(vatRates.getCountry('DE').getStandardRate()).to.equal(19);
      expect(vatRates.getCountry('DE').getReducedRates()).to.eql([7]);
    });
  });
});
