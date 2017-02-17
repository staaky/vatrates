<?php

require __DIR__ . '/../../vendor/autoload.php';

use Assert\Assert;
use Staaky\VATRates\VATRates;
use Staaky\VATRates\VATCountry;

$validISOCodes = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'DE', 'GR', 'FI', 'FR', 'HU', 'IE', 'IT', 'LV', 'LU',
    'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB',
];

describe('VATRates()', function () {
    beforeEach(function () {
        $this->vatRates = new VATRates();
    });

    it('should accept a DateTime and return correct rates for it', function () {
        $this->vatRates = new VATRates(new DateTime('2011-01-01'));
        Assert::that($this->vatRates->getStandardRate('NL'))->eq(19);
    });

    it('should accept a string which it converts into a DateTime', function () {
        $this->vatRates = new VATRates('2011-01-01');
        Assert::that($this->vatRates->getStandardRate('NL'))->eq(19);
    });

    describe('->setDate()', function () {
        it('should accept a Date and return correct rates for it', function () {
            $this->vatRates->setDate(new DateTime('2015-01-01'));
            Assert::that($this->vatRates->getStandardRate('RO'))->eq(24);
        });

        it('should accept a string which it converts into a Date', function () {
            $this->vatRates->setDate('2015-01-01');
            Assert::that($this->vatRates->getStandardRate('RO'))->eq(24);
        });
    });

    describe('->isVATCountry()', function () {
        it('should return true for EU VAT countries', function () {
            Assert::that($this->vatRates->isVATCountry('NL'))->eq(true);
        });
        it('should return false for non VAT countries', function () {
            Assert::that($this->vatRates->isVATCountry('CN'))->eq(false);
        });
    });

    describe('->getCountry()', function () {
        it('should return null for invalid country codes', function () {
            Assert::that($this->vatRates->getCountry('XX'))->null();
        });

        it("should return a VATCountry when given a valid country code", function () {
            Assert::that($this->vatRates->getCountry('NL'))->isInstanceOf(VATCountry::class);
        });

        it("should accept a lowercase countryCode", function () {
            Assert::that($this->vatRates->getCountry('nl'))->isInstanceOf(VATCountry::class);
        });
    });

    describe('->getSuperReducedRate()', function () {
        it('should return null for Austria (AT) on 2017-01-01', function () {
            $this->vatRates->setDate(new DateTime('2017-01-01'));
            Assert::that($this->vatRates->getSuperReducedRate('AT'))->null();
        });
    });

    describe('->getCountries()', function () {
        it('should return an array', function () {
            $countries = $this->vatRates->getCountries();
            Assert::that($countries)->isArray();
        });
    });

    describe('->getReducedRates()', function () {
        it('should return an array', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getReducedRates('GR'))->isArray()->count(2);

        });

        it('should return [6, 12] for Luxembourg on 2014-01-01', function () {
            $this->vatRates->setDate('2014-01-01');
            Assert::that($this->vatRates->getReducedRates('LU'))->eq([6, 12]);
        });

        it('should return [6.5, 13] for Greece on 2011-01-01', function () {
            $this->vatRates->setDate('2011-01-01');
            Assert::that($this->vatRates->getReducedRates('GR'))->eq([6.5, 13]);
        });
    });

    describe('->getStandardRate()', function () {
        it('should return a number', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getStandardRate('NL'))->integerish()->eq(21);
        });
    });

    describe('->getParkingRate()', function () {
        it('should return 13 for Portugal on 2016-01-01', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getParkingRate('PT'))->eq(13);
        });
        it('should return `null` for Denmark on 2016-01-01', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getParkingRate('DK'))->null();
        });
    });

    describe('->getJSON()', function () {
        it('should return an array with property `rates`', function () {
            Assert::that($this->vatRates->getJSON())->isArray()->keyExists('rates');
        });
    });
});


describe('VATCountry()', function () use ($validISOCodes) {
    beforeEach(function () use ($validISOCodes) {
        $this->vatRates      = new VATRates();
        $this->validISOCodes = $validISOCodes;
    });

    describe('->getName()', function () {
        it('should return a string with the name of the country', function () {
            Assert::that($this->vatRates->getCountry('DE')->getName())->string()->eq("Germany");
        });
    });

    describe('->getCode()', function () {
        it('should return `UK` given countryCode `GB`', function () {
            Assert::that($this->vatRates->getCountry('GB')->getCode())->eq('UK');
        });

        it('should return `EL` given countryCode `GR`', function () {
            Assert::that($this->vatRates->getCountry('GR')->getCode())->eq('EL');
        });
    });

    describe('->getCountryCode()', function () {
        it('should return valid ISO codes for all countries', function () {
            foreach ($this->validISOCodes as $isoCode) {
                Assert::that($this->vatRates->getCountry($isoCode)->getCountryCode())->eq($isoCode);
            }
        });

        it('should return `GB` given code `UK`', function () {
            Assert::that($this->vatRates->getCountry('UK')->getCountryCode())->eq('GB');
        });

        it('should return `GR` given code `EL`', function () {
            Assert::that($this->vatRates->getCountry('EL')->getCountryCode())->eq('GR');
        });
    });

    describe('->getSuperReducedRate', function () {
        it('should return 4.8 for Ireland on 2016-01-01', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getCountry('IE')->getSuperReducedRate())->eq(4.8);
        });
        it('should return `null` for Austria on 2011-01-01', function () {
            $this->vatRates->setDate('2011-01-01');
            Assert::that($this->vatRates->getCountry('AT')->getSuperReducedRate())->null();
        });
    });

    describe('->getReducedRates', function () {
        it('should return an array', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getCountry('GR')->getReducedRates())->isArray()->count(2);
        });

        it('should return [6, 12] for Luxembourg on 2014-01-01', function () {
            $this->vatRates->setDate('2014-01-01');
            Assert::that($this->vatRates->getCountry('LU')->getReducedRates())->eq([6, 12]);
        });

        it('should return [6.5, 13] for Greece on 2011-01-01', function () {
            $this->vatRates->setDate('2011-01-01');
            Assert::that($this->vatRates->getCountry('GR')->getReducedRates())->eq([6.5, 13]);
        });
    });

    describe('->getStandardRate()', function () {
        it('should return a number', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getCountry('NL')->getStandardRate())->eq(21);
        });
    });

    describe('->getParkingRate()', function () {
        it('should return 13 for Portugal on 2016-01-01', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getCountry('PT')->getParkingRate())->eq(13);
        });
        it('should return `null` for Denmark on 2016-01-01', function () {
            $this->vatRates->setDate('2016-01-01');
            Assert::that($this->vatRates->getCountry('DK')->getParkingRate())->null();
        });
    });
});
