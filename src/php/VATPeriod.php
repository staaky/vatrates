<?php

namespace Staaky\VATRates;

use DateTime;

class VATPeriod
{
    /**
     * @var DateTime
     */
    protected $effectiveFrom;

    /**
     * @var number|null
     */
    protected $superReduced;

    /**
     * @var number|null
     */
    protected $reduced;

    /**
     * @var number[]|null
     */
    protected $standard;

    /**
     * @var number|null
     */
    protected $parking;

    /**
     * VATPeriod constructor.
     *
     * @param DateTime      $effectiveFrom
     * @param null|number   $superReduced
     * @param null|number[] $reduced
     * @param null|number   $standard
     * @param null|number   $parking
     */
    public function __construct(DateTime $effectiveFrom, $superReduced, $reduced, $standard, $parking)
    {
        $this->effectiveFrom = $effectiveFrom;
        $this->superReduced  = $superReduced;
        $this->reduced       = $reduced;
        $this->standard      = $standard;
        $this->parking       = $parking;
    }

    /**
     * @return DateTime
     */
    public function getEffectiveFrom()
    {
        return $this->effectiveFrom;
    }

    /**
     * @return null|number
     */
    public function getSuperReducedRate()
    {
        return $this->superReduced;
    }

    /**
     * @return null|number[]
     */
    public function getReducedRates()
    {
        return $this->reduced;
    }

    /**
     * @return null|number
     */
    public function getStandardRate()
    {
        return $this->standard;
    }

    /**
     * @return null|number
     */
    public function getParkingRate()
    {
        return $this->parking;
    }
}
