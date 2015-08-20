(function($, VATRates) {
  var Table = {
    create: function() {
      var results = $('#list-js'),
          tbody;

      results.append($('<table>')
        .append(tbody = $('<tbody>'))
      );

      tbody.append($('<tr>').addClass('legenda')
        .append($('<td>').addClass('country').html('Country'))
        .append($('<td>').addClass('country-code').html('Code'))
        .append($('<td>').addClass('rate rate-super-reduced').html('Super reduced'))
        .append($('<td>').addClass('rate rate-reduced').html('Reduced'))
        .append($('<td>').addClass('rate rate-standard').html('Standard'))
        .append($('<td>').addClass('rate rate-parking').html('Parking'))
      );

      $.each(VATRates, function(country_code, data) {
        var tr;

        tbody.append(tr = $('<tr>')
          .append($('<td>').addClass('country').append(data.country))
          .append($('<td>').addClass('country-code').append(country_code))
          .append($('<td>').addClass('rate rate-super-reduced').append(data.rates.superReduced || '-' ))
        );

        // reduced rates
        var reduced = '-';
        if (data.rates.reduced) {
          reduced = data.rates.reduced.join(' / ');
        }
        tr.append($('<td>').addClass('rate rate-reduced').append(reduced));

        tr.append($('<td>').addClass('rate rate-standard').append(data.rates.standard || '-' ))
          .append($('<td>').addClass('rate rate-parking').append(data.rates.parking || '-' ));
      });
    }
  };

  $(function() {
    Table.create();
  });
})(jQuery, VATRates);