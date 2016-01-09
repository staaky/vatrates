/*!
 * VATRates - v<%= pkg.version %>
 * Last update: <%= grunt.template.today("isoDateTime") %>
 * MIT License
 */

// UMD wrapper
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser global
    root.VATRates = factory();
  }
}(this, function() {

var VATRates = {
  "AT": {
    "country": "Austria",
    "rates": {
      "superReduced": false,
      "reduced": [10],
      "standard": 20,
      "parking": 12
    }
  },

  "BE": {
    "country": "Belgium",
    "rates": {
      "superReduced": false,
      "reduced": [6, 12],
      "standard": 21,
      "parking": 12
    }
  },

  "BG": {
    "country": "Bulgaria",
    "rates": {
      "superReduced": false,
      "reduced": [9],
      "standard": 20,
      "parking": false
    }
  },

  "CY": {
    "country": "Cyprus",
    "rates": {
      "superReduced": false,
      "reduced": [5, 9],
      "standard": 19,
      "parking": false
    }
  },

  "CZ": {
    "country": "Czech Republic",
    "rates": {
      "superReduced": false,
      "reduced": [10, 15],
      "standard": 21,
      "parking": false
    }
  },

  "DE": {
    "country": "Germany",
    "rates": {
      "superReduced": false,
      "reduced": [7],
      "standard": 19,
      "parking": false
    }
  },

  "DK": {
    "country": "Denmark",
    "rates": {
      "superReduced": false,
      "reduced": false,
      "standard": 25,
      "parking": false
    }
  },

  "EE": {
    "country": "Estonia",
    "rates": {
      "superReduced": false,
      "reduced": [9],
      "standard": 20,
      "parking": false
    }
  },

  "EL": {
    "hasISODuplicate": "GR",
    "country": "Greece",
    "rates": {
      "superReduced": false,
      "reduced": [6, 13],
      "standard": 23,
      "parking": false
    }
  },

  "GR": {
    "isISODuplicateOf": "EL",
    "country": "Greece",
    "rates": {
      "superReduced": false,
      "reduced": [6, 13],
      "standard": 23,
      "parking": false
    }
  },

  "ES": {
    "country": "Spain",
    "rates": {
      "superReduced": 4,
      "reduced": [10],
      "standard": 21,
      "parking": false
    }
  },

  "FI": {
    "country": "Finland",
    "rates": {
      "superReduced": false,
      "reduced": [10, 14],
      "standard": 24,
      "parking": false
    }
  },

  "FR": {
    "country": "France",
    "rates": {
      "superReduced": 2.1,
      "reduced": [5.5, 10],
      "standard": 20,
      "parking": false
    }
  },

  "HR": {
    "country": "Croatia",
    "rates": {
      "superReduced": false,
      "reduced": [5,13],
      "standard": 25,
      "parking": false
    }
  },

  "HU": {
    "country": "Hungary",
    "rates": {
      "superReduced": false,
      "reduced": [5, 18],
      "standard": 27,
      "parking": false
    }
  },

  "IE": {
    "country": "Ireland",
    "rates": {
      "superReduced": 4.8,
      "reduced": [9, 13.5],
      "standard": 23,
      "parking": 13.5
    }
  },

  "IT": {
    "country": "Italy",
    "rates": {
      "superReduced": 4,
      "reduced": [10],
      "standard": 22,
      "parking": false
    }
  },

  "LT": {
    "country": "Lithuania",
    "rates": {
      "superReduced": false,
      "reduced": [5, 9],
      "standard": 21,
      "parking": false
    }
  },

  "LU": {
    "country": "Luxembourg",
    "rates": {
      "superReduced": 3,
      "reduced": [8],
      "standard": 17,
      "parking": 14
    }
  },

  "LV": {
    "country": "Latvia",
    "rates": {
      "superReduced": false,
      "reduced": [12],
      "standard": 21,
      "parking": false
    }
  },

  "MT": {
    "country": "Malta",
    "rates": {
      "superReduced": false,
      "reduced": [5, 7],
      "standard": 18,
      "parking": false
    }
  },

  "NL": {
    "country": "Netherlands",
    "rates": {
      "superReduced": false,
      "reduced": [6],
      "standard": 21,
      "parking": false
    }
  },

  "PL": {
    "country": "Poland",
    "rates": {
      "superReduced": false,
      "reduced": [5, 8],
      "standard": 23,
      "parking": false
    }
  },

  "PT": {
    "country": "Portugal",
    "rates": {
      "superReduced": false,
      "reduced": [6, 13],
      "standard": 23,
      "parking": 13
    }
  },

  "RO": {
    "country": "Romania",
    "rates": {
      "superReduced": false,
      "reduced": [5, 9],
      "standard": 20,
      "parking": false
    }
  },

  "SE": {
    "country": "Sweden",
    "rates": {
      "superReduced": false,
      "reduced": [6, 12],
      "standard": 25,
      "parking": false
    }
  },

  "SI": {
    "country": "Slovenia",
    "rates": {
      "superReduced": false,
      "reduced": [9.5],
      "standard": 22,
      "parking": false
    }
  },

  "SK": {
    "country": "Slovakia",
    "rates": {
      "superReduced": false,
      "reduced": [10],
      "standard": 20,
      "parking": false
    }
  },

  "UK": {
    "hasISODuplicate": "GB",
    "country": "United Kingdom",
    "rates": {
      "superReduced": false,
      "reduced": [5],
      "standard": 20,
      "parking": false
    }
  },

  "GB": {
    "isISODuplicateOf": "UK",
    "country": "United Kingdom",
    "rates": {
      "superReduced": false,
      "reduced": [5],
      "standard": 20,
      "parking": false
    }
  }
};

return VATRates;

}));
