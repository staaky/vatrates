# VATRates

_Up-to-date European VAT Rates_

[vatrates.nickstakenburg.com](http://vatrates.nickstakenburg.com)

VAT rates stored in `JSON` format, with [Javascript](#javascript) and [PHP](#php) classes for easy access.

## Install

#### Download

* [vatrates.min.js](https://unpkg.com/vatrates@2/dist/vatrates.min.js) minified
* [vatrates.js](https://unpkg.com/vatrates@2/dist/vatrates.js) un-minified

#### CDN

``` html
<script src='https://unpkg.com/vatrates@2/dist/vatrates.min.js'></script>
<!-- or -->
<script src='https://unpkg.com/vatrates@2/dist/vatrates.js'></script>
```

#### NPM

```
npm install vatrates
```

#### Composer

For the PHP package:

```
composer require staaky/vatrates
```

## Javascript

Require vatrates or use a script tag to include vatrates.js:

``` js
var vatRates = require('vatrates');
```

``` html
<script src='vatrates.js'></script>
```

An instance created with `new VATRates()` gives you several VAT rate functions. It's recommended to always use an `isVATCountry()` check before using them, like this:

``` js
var VATRates = require('vatrates');

var vatRates = new VATRates();
if (vatRates.isVATCountry('RO')) {
    console.log(vatRates.getSuperReducedRate('RO')); // -> undefined
    console.log(vatRates.getReducedRates('RO'));     // -> [5, 9]
    console.log(vatRates.getStandardRate('RO'));     // -> 19
    console.log(vatRates.getParkingRate('RO'));      // -> undefined
}
```

Default rates are for today, to get rates for a different day pass in a `Date`:

``` js
var vatRates = new VATRates(new Date('2016-01-01'));
if (vatRates.isVATCountry('RO')) {
    console.log(vatRates.getStandardRate('RO')); // -> 20
}
```

You can also change the date by calling `setDate()` on a previously created instance:

``` js
var vatRates = new VATRates();
vatRates.setDate(new Date('2015-01-01'));
if (vatRates.isVATCountry('RO')) {
    console.log(vatRates.getStandardRate('RO')); // -> 24
}
``` 

### getCountry(countryCode)

Another approach is to use `getCountry()`, it returns a `VATCountry` or `undefined` if the country doesn't use VAT. With a VATCountry you'll have all the VAT rate functions and some extra helpers.

``` js
var vatRates = new VATRates();
var country;
if ((country = vatRates.getCountry('GB'))) {
    console.log(country.getName());             // -> "United Kingdom"
    console.log(country.getCode());             // -> "UK"
    console.log(country.getCountryCode());      // -> "GB"
    console.log(country.getSuperReducedRate()); // -> undefined
    console.log(country.getReducedRates());     // -> [5]
    console.log(country.getStandardRate());     // -> 20
    console.log(country.getParkingRate());      // -> undefined
}
```

The United Kingdom and Greece use extra non standard country codes "UK" and "EL", these are also accepted.

``` js
vatRates.getCountry('UK'); // -> same result as 'GB'
```

### getCountries()

Returns an `Array` of all the countries using VAT, as `VATCountry`'s.

``` js
var vatRates = new VATRates();
var countries = vatRates.getCountries();

countries.forEach(function(country) {
  console.log(country.getCountryCode() + " has VAT: " + country.getStandardRate());
});
```

### setDate(date)

Set the `Date` for which to return VAT rates.

``` js
var vatRates = new VATRates();
vatRates.setDate(new Date('2015-01-01'));
```

This is identical to:

``` js
var vatRates = new VATRates(new Date('2015-01-01'));
```

> All other functions take this date into account, so make sure to always set the date first.

### isVATCountry(countryCode)

Returns `true` if a country uses VAT, or `false` if not.

``` js
var vatRates = new VATRates();
console.log(vatRates.isVATCountry('FR')); // -> true
console.log(vatRates.isVATCountry('US')); // -> false
```

### getSuperReducedRate(countryCode)

Returns the super reduced rate for a country, or `undefined` when none is available.

``` js
var vatRates = new VATRates();
if (vatRates.isVATCountry('FR')) {
  console.log(vatRates.getSuperReducedRate('FR')); // -> 2.1
});
```

A `VATCountry` returned by `getCountry()` offers this method directly.

``` js
var vatRates = new VATRates();
var country;
if ((country = vatRates.getCountry('FR'))) {
  console.log(country.getName());             // -> "France"
  console.log(country.getSuperReducedRate()); // -> 2.1
}
```

### getReducedRates(countryCode)

Returns an `Array` of reduced rates for a country, or `undefined` when none are available.

``` js
var vatRates = new VATRates();
if (vatRates.isVATCountry('IE')) {
  console.log(vatRates.getReducedRates('IE')); // -> [9, 13.5]
});
```

A `VATCountry` offers this method directly.

``` js
var vatRates = new VATRates();
var country;
if ((country = vatRates.getCountry('IE'))) {
  console.log(country.getName());         // -> "Ireland"
  console.log(country.getReducedRates()); // -> [9, 13.5]
}
```

### getStandardRate(countryCode)

Returns the standard rate for a country, or `undefined` when none is available.

``` js
var vatRates = new VATRates();
if (vatRates.isVATCountry('NL')) {
  console.log(vatRates.getStandardRate('NL')); // -> 21
});
```

A `VATCountry` offers this method directly.

``` js
var vatRates = new VATRates();
var country;
if ((country = vatRates.getCountry('NL'))) {
  console.log(country.getName());         // -> "Netherlands"
  console.log(country.getStandardRate()); // -> 21
}
```

### getParkingRate(countryCode)

Returns the parking rate for a country, or `undefined` when none is available.

``` js
var vatRates = new VATRates();
if (vatRates.isVATCountry('LU')) {
  console.log(vatRates.getParkingRate('LU')); // -> 14
}
```

A `VATCountry` offers this method directly.

``` js
var vatRates = new VATRates();
var country;
if ((country = vatRates.getCountry('LU'))) {
  console.log(country.getName());        // -> "Luxembourg"
  console.log(country.getParkingRate()); // -> 14
}
```

## PHP

After installing through Composer use `Staaky\VATRates\VATRates`

```
composer require staaky/vatrates
```

``` php
use Staaky\VATRates\VATRates;
```

An instance created with `new VATRates()` gives you several VAT rate functions. It's recommended to always use an `isVATCountry()` check before using them, like this:

``` php
$vatRates = new VATRates();
if ($vatRates->isVATCountry('RO')) {
    var_dump($vatRates->getSuperReducedRate('RO')); // -> null
    var_dump($vatRates->getReducedRates('RO'));     // -> [5, 9]
    var_dump($vatRates->getStandardRate('RO'));     // -> 19
    var_dump($vatRates->getParkingRate('RO'));      // -> null
}
```

Default rates are for today, to get rates for a different day pass in a `DateTime`:

``` php
$vatRates = new VATRates(new DateTime('2016-01-01'));
if ($vatRates->isVATCountry('RO')) {
    var_dump($vatRates->getStandardRate('RO')); // -> 20
}
```

You can also change the date by calling `setDate()` on a previously created instance:

``` php
$vatRates = new VATRates();
$vatRates->setDate(new DateTime('2015-01-01'));
if ($vatRates->isVATCountry('RO')) {
    var_dump($vatRates->getStandardRate('RO')); // -> 24
}
```

### getCountry(countryCode)

Another approach is to use `getCountry()`, it returns a `VATCountry` or `null` if the country doesn't use VAT. With a `VATCountry` you'll have all the VAT rate functions and some extra helpers.

``` php
$vatRates = new VATRates();
if (($country = $vatRates->getCountry('GB'))) {
    var_dump($country->getName());             // -> "United Kingdom"
    var_dump($country->getCode());             // -> "UK"
    var_dump($country->getCountryCode());      // -> "GB"
    var_dump($country->getSuperReducedRate()); // -> null
    var_dump($country->getReducedRates());     // -> [5]
    var_dump($country->getStandardRate());     // -> 20
    var_dump($country->getParkingRate());      // -> null
}
```

The United Kingdom and Greece use extra non standard country codes "UK" and "EL", these are also accepted.

``` php
$vatRates->getCountry('UK'); // -> same result as 'GB'
```

### getCountries()

Returns an `array` of all the countries using VAT, as `VATCountry`'s.

``` php
$vatRates = new VATRates();
$countries = $vatRates->getCountries();

foreach ($countries as $country) {
  print_r($country->getCountryCode() . " has VAT: " . $country->getStandardRate() . "\n");
}
```

### setDate(DateTime $date)

Set the date for which to return VAT rates.

``` php
$vatRates = new VATRates();
$vatRates->setDate(new DateTime('2015-01-01'));
```

This is identical to:

``` php
$vatRates = new VATRates(new DateTime('2015-01-01'));
```

> All other functions take this date into account, so make sure to always set the date first.

### isVATCountry($countryCode)

Returns `true` if a country uses VAT, or `false` if not.

``` php
$vatRates = new VATRates();
var_dump($vatRates->isVATCountry('FR')); // -> true
var_dump($vatRates->isVATCountry('US')); // -> false
```

### getSuperReducedRate($countryCode)

Returns the super reduced rate for a country, or `null` if none is available.

``` php
$vatRates = new VATRates();
if ($vatRates->isVATCountry('FR')) {
  var_dump($vatRates->getSuperReducedRate('FR')); // -> 2.1
});
```

A `VATCountry` returned by `getCountry()` offers this method directly.

``` php
$vatRates = new VATRates();
if (($country = $vatRates->getCountry('FR'))) {
  var_dump($country->getName());             // -> "France"
  var_dump($country->getSuperReducedRate()); // -> 2.1
}
```

### getReducedRates($countryCode)

Returns an `array` of reduced rates for a country, or `null` if none are available.

``` php
$vatRates = new VATRates();
if ($vatRates->isVATCountry('IE')) {
  var_dump($vatRates->getReducedRates('IE')); // -> [9, 13.5]
}
```

A `VATCountry` offers this method directly.

``` php
$vatRates = new VATRates();
if (($country = $vatRates->getCountry('IE'))) {
  var_dump($country->getName());         // -> "Ireland"
  var_dump($country->getReducedRates()); // -> [9, 13.5]
}
```

### getStandardRate($countryCode)

Returns the standard rate for a country, or `null` when none is available.

``` php
$vatRates = new VATRates();
if ($vatRates->isVATCountry('NL')) {
  var_dump($vatRates->getStandardRate('NL')); // -> 21
});
```

A `VATCountry` offers this method directly.

``` php
$vatRates = new VATRates();
if (($country = $vatRates->getCountry('NL'))) {
  var_dump($country->getName());         // -> "Netherlands"
  var_dump($country->getStandardRate()); // -> 21
}
```

### getParkingRate($countryCode)

Returns the parking rate for a country, or `null` when none is available.

``` php
$vatRates = new VATRates();
if ($vatRates->isVATCountry('LU')) {
  var_dump($vatRates->getParkingRate('LU')); // -> 14
});
```

A `VATCountry` offers this method directly.

``` php
$vatRates = new VATRates();
if (($country = $vatRates->getCountry('LU'))) {
  var_dump($country->getName());        // -> "Luxembourg"
  var_dump($country->getParkingRate()); // -> 14
}
```

## Development

### Webpack

Use `webpack` to create a new build after you've made changes.

```
webpack
```

### Gulp

Use `gulp` to load up the page in the `/example` folder. It shows the output of all files (Javascript, JSON & PHP) and automatically rebuilds with webpack as you modify source code.

```
gulp
```

### Unit Tests

Run unit tests using `npm test`, this runs tests for every language.

```
npm test
```

Javascript tests are run with [Mocha](https://mochajs.org) and PHP tests with [Peridot](http://peridot-php.github.io). They can be run individually as well:

```
npm run mocha
```

```
npm run peridot
```

## Contribute

VAT rates are kept up to date **manually** using data from the [European Commission](http://ec.europa.eu/taxation_customs/resources/documents/taxation/vat/how_vat_works/rates/vat_rates_en.pdf) and [VATLive.com](http://www.vatlive.com). Initial historic rates are based on data from [jsonvat.com](http://jsonvat.com).

If you notice an incorrect rate please [create an issue](https://github.com/staaky/vatrates/issues) or send a pull request. Future VAT changes can also be added to the `JSON` file. If you know of an upcoming change that isn't listed yet, please let me know.

Data on historic VAT rates is also appreciated. This can be hard to track down, especially the non-standard rates.

[![Flattr VATRates](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=staaky&url=http://vatrates.nickstakenburg.com&tags=github&category=software)

## License

VATRates is [MIT Licensed](https://raw.githubusercontent.com/staaky/vatrates/master/LICENSE)
