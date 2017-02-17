<?php

namespace Staaky\VATRates;

use DateTime;

class VATCountry
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $code;

    /**
     * @var string
     */
    protected $countryCode;

    /**
     * @var VATPeriod[]|null
     */
    protected $periods;

    /**
     * @var DateTime|null
     */
    protected $date;

    /**
     * VATCountry constructor.
     *
     * @param string        $name
     * @param string        $code
     * @param string        $countryCode
     * @param null|VATPeriod[] $periods
     * @param DateTime|null $date
     */
    public function __construct($name, $code, $countryCode, $periods, $date = null)
    {
        $this->name        = $name;
        $this->code        = $code;
        $this->countryCode = $countryCode;
        $this->periods     = $periods;

        $this->setDate($date);
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * @return string
     */
    public function getCountryCode()
    {
        return $this->countryCode;
    }

    /**
     * @return null|VATPeriod[]
     */
    public function getPeriods()
    {
        return $this->periods;
    }

    /**
     * Set the date for which to return VAT rates.
     *
     * @param DateTime|null $date
     */
    public function setDate($date)
    {
        if (is_null($date)) {
            $date = new DateTime();
        }

        $this->date = $date;
    }

    /**
     * @param DateTime $date
     *
     * @return null|VATPeriod
     */
    public function getPeriod($date)
    {
        $resultPeriod = null;

        for ($i = count($this->periods) - 1; $i >= 0; $i--) {
            $period = $this->periods[$i];

            if ($period->getEffectiveFrom() <= $date) {
                $resultPeriod = $period;
            }
        }

        return $resultPeriod;
    }

    /**
     * Get the Period that matches the current date.
     *
     * @return null|VATPeriod
     */
    public function getCurrentPeriod()
    {
        return $this->getPeriod($this->date);
    }

    /**
     * Did this country use VAT on the given date.
     *
     * @param DateTime $date
     *
     * @return bool
     */
    public function usedVATOnDate($date)
    {
        $period = $this->getPeriod($date);

        return !is_null($period) && !empty($period->getStandardRate());
    }

    /**
     * Did this country use VAT on the current date.
     *
     * @return bool
     */
    public function usedVATOnCurrentDate()
    {
        return $this->usedVATOnDate($this->date);
    }

    /**
     * Get the super reduced rates.
     *
     * @return null|number
     */
    public function getSuperReducedRate()
    {
        $period = $this->getCurrentPeriod();

        return ($period ? $period->getSuperReducedRate() : null);
    }

    /**
     * Get the reduced rates.
     *
     * @return null|\number[]
     */
    public function getReducedRates()
    {
        $period = $this->getCurrentPeriod();

        return ($period ? $period->getReducedRates() : null);
    }

    /**
     * Get the standard rate.
     *
     * @return null|number
     */
    public function getStandardRate()
    {
        $period = $this->getCurrentPeriod();

        return ($period ? $period->getStandardRate() : null);
    }

    /**
     * Get the parking rate.
     *
     * @return null|number
     */
    public function getParkingRate()
    {
        $period = $this->getCurrentPeriod();

        return ($period ? $period->getParkingRate() : null);
    }
}
