<?php
require '../vendor/autoload.php';

use Staaky\VATRates\VATRates;
use Staaky\VATRates\VATCountry;

$date = isset($_GET['date']) ? $_GET['date'] : date('Y-m-d');

?>
<!DOCTYPE html>
<html>
<head>
    <title>VATRates - Example</title>

    <script type="text/javascript" src="../node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="../dist/vatrates.js"></script>
    <script type="text/javascript" src="js/js-table.js"></script>
    <script type="text/javascript" src="js/tests.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../node_modules/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>

    <!-- datepicker -->
    <link rel="stylesheet" type="text/css" href="../node_modules/pikaday/css/pikaday.css"/>
    <script type="text/javascript" src="../node_modules/moment/moment.js"></script>
    <script type="text/javascript" src="../node_modules/pikaday/pikaday.js"></script>

    <script>
      $(function() {
        var picker = new Pikaday({
          field:    document.getElementById('datepicker'),
          trigger:  document.getElementById('datepicker-button'),
          format:   'YYYY-MM-DD',
          position: 'bottom right',
          startDay: 1, // Monday
          onSelect: function() {
            $('form#change-date').submit();
          }
        });

        $('#dates .date-years').on('click', '.year button[data-date]', function(event) {
          event.preventDefault();

          var date = $(event.currentTarget).data('date');

          $('#datepicker').val(date);
          $('form#change-date').submit();
        });

        Tests.run();
      });
    </script>
</head>
<body>

    <a class='github' href="https://github.com/staaky/vatrates" title='GitHub' target='_blank'>
        <span class='ribbon'></span>
        <i></i>
    </a>

    <div class="container-fluid">
        <h1>VATRates</h1>

        <p>This page tests the output of all files
            (Javascript, JSON &amp; PHP).
        </p>

        <div id="results">
            <span class="alert message" role="alert">&nbsp;</span>
        </div>

        <div id="dates">
            <div class="date-years">
                <?php
                $currentYear = (int)date('Y');
                $showYears   = 6;
                for ($year = $currentYear - $showYears; $year < $currentYear; $year++) {
                    $yearData = $year . '-01-01';
                    ?>
                    <div class="year <?php if ($yearData == $date) { ?>selected<?php } ?>">
                        <button type="button"
                                class="btn btn-primary"
                                data-date="<?= $yearData ?>"><?= $year ?></button>
                    </div>

                    <?php
                }
                ?>
                <div class="year <?php if ($date == date('Y-m-d')) { ?>selected<?php } ?>">
                    <button type="button"
                            class="btn btn-primary"
                            data-date="<?= date('Y-m-d') ?>">Today
                    </button>
                </div>
            </div>

            <div class="date-current">
                <form method="get" action="" id="change-date">
                    <div class="input-group">
                        <input class="form-control"
                               type="text"
                               name="date"
                               value="<?php echo $date; ?>"
                               id="datepicker"/>
                        <span class="input-group-btn">
                            <button type="button"
                                    class="btn btn-primary dropdown-toggle"
                                    data-toggle="dropdown"
                                    id="datepicker-button"></button>
                        </span>
                    </div>
                </form>
            </div>
        </div>

        <div class="row">
            <!-- Javascript -->
            <div class="col" id='list-js'>
                <h2>Javascript</h2>
                <h3>VATRates</h3>

                <table class="table table-striped table-hover table-sm">
                    <thead class="thead-inverse">
                        <tr>
                            <th class="country">Country</th>
                            <th class="country-code">Code</th>
                            <th class="rate rate-super-reduced">Super reduced</th>
                            <th class="rate rate-reduced">Reduced</th>
                            <th class="rate rate-standard">Standard</th>
                            <th class="rate rate-parking">Parking</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

            <script>JsTable.update('<?=$date?>');</script>

            <!-- JSON -->
            <?php
            $json_file = file_get_contents('../src/json/vatrates.json');
            $json      = json_decode($json_file, true);
            ?>
            <div class="col" id='list-json'>
                <h2>JSON</h2>
                <h3>vatrates.json</h3>

                <table class="table table-striped table-hover table-sm">
                    <thead class="thead-inverse">
                        <tr>
                            <th class="country">Country</th>
                            <th class="country-code">Code</th>
                            <th class="rate rate-super-reduced">Super reduced</th>
                            <th class="rate rate-reduced">Reduced</th>
                            <th class="rate rate-standard">Standard</th>
                            <th class="rate rate-parking">Parking</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        /**
                         * Helper function for the JSON output
                         *
                         * @param array    $periods
                         * @param DateTime $date
                         *
                         * @return array|null
                         */
                        function getCurrentPeriod($periods, $date)
                        {
                            $currentPeriod = null;

                            for ($i = count($periods) - 1; $i >= 0; $i--) {
                                $period = $periods[$i];

                                if (new DateTime($period['effectiveFrom']) <= $date) {
                                    $currentPeriod = $period;
                                }
                            }

                            if (is_null($currentPeriod)) {
                                $currentPeriod = $periods[0];
                            }

                            return $currentPeriod;
                        }

                        foreach ($json['rates'] as $country) {
                            // take the correct period based on the date

                            $period = getCurrentPeriod($country['periods'], new DateTime($date));

                            if (isset($period['rates']['standard'])) {

                                ?>

                                <tr>
                                    <td class="country"><?= $country['name'] ?></td>
                                    <td class="country"><?php
                                        echo $country['countryCode'];

                                        if ($country['code'] != $country['countryCode']) {
                                            echo ' / ' . $country['code'];
                                        }
                                        ?>
                                    </td>
                                    <td class="rate rate-super-reduced"><?= (isset($period['rates']['superReduced']) ? $period['rates']['superReduced'] : '-') ?></td>
                                    <td class="rate rate-reduced">
                                        <?php
                                        if (!empty($period['rates']['reduced'])) {
                                            echo join(' / ', $period['rates']['reduced']);
                                        } else {
                                            echo "-";
                                        }
                                        ?>
                                    </td>
                                    <td class="rate rate-standard"><?= ($period['rates']['standard'] ? $period['rates']['standard'] : '-') ?></td>
                                    <td class="rate rate-parking"><?= (isset($period['rates']['parking']) ? $period['rates']['parking'] : '-') ?></td>
                                </tr>
                                <?php
                            }
                        } ?>
                    </tbody>
                </table>
            </div>

            <!-- PHP -->

            <div class="col" id='list-php'>
                <?php
                $vatRates = new VATRates();
                $vatRates->setDate(new DateTime($date));
                $countries = $vatRates->getCountries();
                ?>

                <h2>PHP</h2>
                <h3>Staaky\VATRates\VATRates</h3>

                <table class="table table-striped table-hover table-sm">
                    <thead class="thead-inverse">
                        <tr>
                            <th class="country">Country</th>
                            <th class="country-code">Code</th>
                            <th class="rate rate-super-reduced">Super reduced</th>
                            <th class="rate rate-reduced">Reduced</th>
                            <th class="rate rate-standard">Standard</th>
                            <th class="rate rate-parking">Parking</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach ($countries as $country) {
                            /** @var VATCountry $country */
                            ?>
                            <tr>
                                <td class="country"><?= $country->getName() ?></td>
                                <td class="country">
                                    <?php
                                    echo $country->getCountryCode();
                                    if ($country->getCode() != $country->getCountryCode()) {
                                        echo ' / ' . $country->getCode();
                                    }
                                    ?>
                                </td>
                                <td class="rate rate-super-reduced">
                                    <?= (!empty($country->getSuperReducedRate()) ? $country->getSuperReducedRate() : '-') ?>
                                </td>
                                <td class="rate rate-reduced">
                                    <?php
                                    if (!empty($country->getReducedRates())) {
                                        echo join(' / ', $country->getReducedRates());
                                    } else {
                                        echo "-";
                                    }
                                    ?>
                                </td>
                                <td class="rate rate-standard">
                                    <?= (!empty($country->getStandardRate()) ? $country->getStandardRate() : '-') ?>
                                </td>
                                <td class="rate rate-parking">
                                    <?= (!empty($country->getParkingRate()) ? $country->getParkingRate() : '-') ?>
                                </td>
                            </tr>


                        <?php } ?>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</body>
</html>
