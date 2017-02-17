<?php

namespace Staaky\VATRates;

use DateTime;

class VATRates
{
    /**
     * @var string|null
     */
    protected $json;

    /**
     * @var VATCountry[]|null
     */
    protected $countries;

    /**
     * @var DateTime|null
     */
    protected $date;

    /**
     * VATRates constructor.
     *
     * @param DateTime|null $date
     */
    public function __construct($date = null)
    {
        // read JSON
        $file       = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'json' . DIRECTORY_SEPARATOR
            . 'vatrates.json';
        $this->json = json_decode(file_get_contents($file), true);

        // turn it into countries
        $this->countries = [];
        if (!empty($this->json)) {
            $this->countries = array_map(function ($country) {
                $periods = [];

                if (!empty($country['periods'])) {
                    $periods = array_map(function ($period) {
                        return new VATPeriod(
                            new DateTime($period['effectiveFrom']),
                            isset($period['rates']['superReduced']) ? $period['rates']['superReduced'] : null,
                            isset($period['rates']['reduced']) ? $period['rates']['reduced'] : null,
                            isset($period['rates']['standard']) ? $period['rates']['standard'] : null,
                            isset($period['rates']['parking']) ? $period['rates']['parking'] : null
                        );
                    }, $country['periods']);
                }

                return new VATCountry(
                    $country['name'],
                    $country['code'],
                    $country['countryCode'],
                    $periods
                );
            }, $this->json['rates']);
        }

        $this->setDate($date);
    }

    /**
     * @param DateTime|null $date
     */
    public function setDate($date)
    {
        if (is_null($date)) {
            $date = new DateTime();
        } elseif (is_string($date)) {
            $date = new DateTime($date);
        }

        $this->date = $date;

        // set that date on all countries
        $this->countries = array_map(function ($country) {
            /** @var VATCountry $country */
            $country->setDate($this->date);

            return $country;
        }, $this->countries);
    }

    /**
     * Get the countries that used VAT at the current date.
     * Optionally include countries that no longer use VAT.
     *
     * @param bool $includeNoLongerUsingVAT
     *
     * @return VATCountry[]
     */
    public function getCountries($includeNoLongerUsingVAT = false)
    {
        if ($includeNoLongerUsingVAT) {
            return $this->countries;
        }

        return array_filter($this->countries, function ($country) {
            /** @var VATCountry $country */
            return $country->usedVATOnCurrentDate();
        });
    }

    /**
     * Find a country that used VAT at the current date.
     *
     * @param string $countryCode
     *
     * @return VATCountry|null
     */
    public function getCountry($countryCode)
    {
        // accept lowercase country codes
        $countryCode = strtoupper($countryCode);

        $result = current(array_filter($this->countries, function ($country) use ($countryCode) {
            /** @var VATCountry $country */
            return ($country->getCode() == $countryCode || $country->getCountryCode() == $countryCode);
        }));

        return $result != false ? $result : null;
    }

    /**
     * Check if a country used VAT at the current date.
     *
     * @param $countryCode
     *
     * @return bool
     */
    public function isVATCountry($countryCode)
    {
        $country = $this->getCountry($countryCode);

        return !is_null($country) && $country->usedVATOnCurrentDate();
    }

    /**
     * Get the super reduced rate for a country.
     *
     * @param $countryCode
     *
     * @return null|number
     */
    public function getSuperReducedRate($countryCode)
    {
        $country = $this->getCountry($countryCode);
        if (!is_null($country)) {
            return $country->getSuperReducedRate();
        }

        return null;
    }

    /**
     * Get the reduced rates for a country.
     *
     * @param $countryCode
     *
     * @return null|\number[]
     */
    public function getReducedRates($countryCode)
    {
        $country = $this->getCountry($countryCode);
        if (!is_null($country)) {
            return $country->getReducedRates();
        }

        return null;
    }

    /**
     * Get the standard rate for a country.
     *
     * @param $countryCode
     *
     * @return null|number
     */
    public function getStandardRate($countryCode)
    {
        $country = $this->getCountry($countryCode);
        if (!is_null($country)) {
            return $country->getStandardRate();
        }

        return null;
    }

    /**
     * Get the parking rate for a country.
     *
     * @param $countryCode
     *
     * @return null|number
     */
    public function getParkingRate($countryCode)
    {
        $country = $this->getCountry($countryCode);
        if (!is_null($country)) {
            return $country->getParkingRate();
        }

        return null;
    }

    /**
     * Return the raw JSON data
     *
     * @return mixed
     */
    public function getJSON()
    {
        return $this->json;
    }
}
