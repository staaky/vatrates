<?php
/*!
 * VATRates - v<%= pkg.version %>
 * Last update: <%= grunt.template.today("isoDateTime") %>
 * MIT License
 */

$VATRates = array(
  "AT" => array(
    "country" => "Austria",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(10),
      "standard" => 20,
      "parking" => 12
    )
  ),

  "BE" => array(
    "country" => "Belgium",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(6, 12),
      "standard" => 21,
      "parking" => 12
    )
  ),

  "BG" => array(
    "country" => "Bulgaria",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(9),
      "standard" => 20,
      "parking" => false
    )
  ),

  "CY" => array(
    "country" => "Cyprus",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5, 9),
      "standard" => 19,
      "parking" => false
    )
  ),

  "CZ" => array(
    "country" => "Czech Republic",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(10, 15),
      "standard" => 21,
      "parking" => false
    )
  ),

  "DE" => array(
    "country" => "Germany",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(7),
      "standard" => 19,
      "parking" => false
    )
  ),

  "DK" => array(
    "country" => "Denmark",
    "rates" => array(
      "superReduced" => false,
      "reduced" => false,
      "standard" => 25,
      "parking" => false
    )
  ),

  "EE" => array(
    "country" => "Estonia",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(9),
      "standard" => 20,
      "parking" => false
    )
  ),

  "EL" => array(
    "hasISODuplicate" => "GR",
    "country" => "Greece",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(6, 13),
      "standard" => 23,
      "parking" => false
    )
  ),

  "GR" => array(
    "isISODuplicateOf" => "EL",
    "country" => "Greece",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(6, 13),
      "standard" => 23,
      "parking" => false
    )
  ),

  "ES" => array(
    "country" => "Spain",
    "rates" => array(
      "superReduced" => 4,
      "reduced" => array(10),
      "standard" => 21,
      "parking" => false
    )
  ),

  "FI" => array(
    "country" => "Finland",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(10, 14),
      "standard" => 24,
      "parking" => false
    )
  ),

  "FR" => array(
    "country" => "France",
    "rates" => array(
      "superReduced" => 2.1,
      "reduced" => array(5.5, 10),
      "standard" => 20,
      "parking" => false
    )
  ),

  "HR" => array(
    "country" => "Croatia",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5,13),
      "standard" => 25,
      "parking" => false
    )
  ),

  "HU" => array(
    "country" => "Hungary",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5, 18),
      "standard" => 27,
      "parking" => false
    )
  ),

  "IE" => array(
    "country" => "Ireland",
    "rates" => array(
      "superReduced" => 4.8,
      "reduced" => array(9, 13.5),
      "standard" => 23,
      "parking" => 13.5
    )
  ),

  "IT" => array(
    "country" => "Italy",
    "rates" => array(
      "superReduced" => 4,
      "reduced" => array(10),
      "standard" => 22,
      "parking" => false
    )
  ),

  "LT" => array(
    "country" => "Lithuania",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5, 9),
      "standard" => 21,
      "parking" => false
    )
  ),

  "LU" => array(
    "country" => "Luxembourg",
    "rates" => array(
      "superReduced" => 3,
      "reduced" => array(8),
      "standard" => 17,
      "parking" => 14
    )
  ),

  "LV" => array(
    "country" => "Latvia",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(12),
      "standard" => 21,
      "parking" => false
    )
  ),

  "MT" => array(
    "country" => "Malta",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5, 7),
      "standard" => 18,
      "parking" => false
    )
  ),

  "NL" => array(
    "country" => "Netherlands",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(6),
      "standard" => 21,
      "parking" => false
    )
  ),

  "PL" => array(
    "country" => "Poland",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5, 8),
      "standard" => 23,
      "parking" => false
    )
  ),

  "PT" => array(
    "country" => "Portugal",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(6, 13),
      "standard" => 23,
      "parking" => 13
    )
  ),

  "RO" => array(
    "country" => "Romania",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5, 9),
      "standard" => 20,
      "parking" => false
    )
  ),

  "SE" => array(
    "country" => "Sweden",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(6, 12),
      "standard" => 25,
      "parking" => false
    )
  ),

  "SI" => array(
    "country" => "Slovenia",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(9.5),
      "standard" => 22,
      "parking" => false
    )
  ),

  "SK" => array(
    "country" => "Slovakia",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(10),
      "standard" => 20,
      "parking" => false
    )
  ),

  "UK" => array(
    "hasISODuplicate" => "GB",
    "country" => "United Kingdom",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5),
      "standard" => 20,
      "parking" => false
    )
  ),

  "GB" => array(
    "isISODuplicateOf" => "UK",
    "country" => "United Kingdom",
    "rates" => array(
      "superReduced" => false,
      "reduced" => array(5),
      "standard" => 20,
      "parking" => false
    )
  )
);
