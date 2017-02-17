/**
 * Tests
 *
 * Compares all 3 tables to look for differences
 */

(function($) {
  var Tests = {
    run: function() {
      var lists  = $('.list'),
          errors = [];

      // check if all files load
      var loaded = 0;
      lists.each(function(i, list) {
        var type = $(list).attr('id').replace(/^list-/, '');
        if ($(list).find('table tr:not(.legenda)').length < 0 ||
          $(list).html().indexOf('Netherlands') < 0) {
          errors.push('Error: ' + type.toUpperCase() + " won't load, it might have a syntax error");
          $(list).find('h2').addClass('error');
        } else {
          loaded++;
        }
      });

      if (loaded != lists.length) {
        // exit here
        this.error(errors);
        return;
      }

      // check for differences
      var differences = 0;
      // go over the first table, check that all others match
      var jsTable = $('#list-js table');

      $('table:not(#list-js table)').each(function(i, table) {
        $(table).find('tr').each(function(y, tr) {
          $(tr).find('td').each(function(x, td) {
            var value = $.trim($(td).html());
            // find matching js value
            var compareWith = $($(jsTable.find('tr')[y]).find('td')[x]);

            if (value != $.trim(compareWith.html())) {
              compareWith.add(td).addClass('has-error');
              differences++;
            }
          });
        });
      });

      if (differences) {
        errors.push("Error: Found some differences, fix the incorrect values");
        this.error(errors);
        return;
      }

      this.success("Success! No issues detected")
    },

    error: function(errors) {
      $('#results').show().addClass('results-error');
      $('#results .message').html(errors.join('<br>'));
    },

    success: function(msg) {
      if (msg) $('#results .message').html(msg);
      $("#results").show().addClass('results-success');
    }
  };

  window.Tests = Tests;

})(jQuery);
