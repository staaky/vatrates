(function($, VATRates) {
  var JsTable = {
    update: function(date) {
      var results = $('#list-js');
      date = date || $('#currentDate').val();

      var vatRates = new VATRates(date); // set the date from the datepicker

      // get all the countries using VAT
      var countries = vatRates.getCountries();

      // rewrite the tbody element
      var tbody = results.find('table tbody');
      tbody.html('');

      countries.forEach(function(country) {
        var tr;

        var code = country.getCode();
        var countryCode = country.getCountryCode();
        var codes = [countryCode];

        if (code != countryCode) {
          codes.push(code);
        }

        // we could just use the country functions directly, but we'll call VATRates::functions instead for testing
        tbody.append(tr = $('<tr>')
          .append($('<td>').addClass('country').append(country.getName()))
          .append($('<td>').addClass('country-code').append(codes.join(' / ')))
          .append($('<td>').addClass('rate rate-super-reduced').append(vatRates.getSuperReducedRate(countryCode) || '-'))
        );


        // reduced rates
        var reduced = '-';
        if (vatRates.getReducedRates(countryCode)) {
          reduced = vatRates.getReducedRates(countryCode).join(' / ');
        }
        tr.append($('<td>').addClass('rate rate-reduced').append(reduced));

        tr.append($('<td>').addClass('rate rate-standard').append(vatRates.getStandardRate(countryCode) || '-'))
          .append($('<td>').addClass('rate rate-parking').append(vatRates.getParkingRate(countryCode) || '-'));
      });
    }
  };

  window.JsTable = JsTable;
})(jQuery, VATRates);
