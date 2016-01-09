<?php
include '../../vatrates/vatrates.php';
?>
<!DOCTYPE html>
<html>
<head>
<title>VATRates - Tests</title>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="../../vatrates/vatrates.js"></script>
<script type="text/javascript" src="js/table-js.js"></script>
<script type="text/javascript" src="js/tests.js"></script>

<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>
<body>

<a class='github' href="https://github.com/staaky/vatrates" title='GitHub' target='_blank'>
  <span class='ribbon'></span>
  <i></i>
</a>

<h1>VATRates - Tests</h1>

<p>This page tests all files in production (<span class='ic'>.js</span>, <span class='ic'>.json</span> &amp; <span class='ic'>.php</span>)
   and helps make sure VAT rates are identical across files.</p>

<div id='results'></div>

<div id='lists'>

  <!-- Javascript -->
  <div class='list' id='list-js'>
    <h2>vatrates.js</h2>

  </div>


  <!-- JSON -->
  <?php
  $json_file = file_get_contents('../../vatrates/vatrates.json');
  $json = json_decode($json_file, true);
  ?>

  <div class='list' id='list-json'>
    <h2>vatrates.json</h2>

    <table>
      <tbody>
        <tr class="legenda">
          <td class="country">Country</td>
          <td class="country-code">Code</td>
          <td class="rate rate-super-reduced">Super reduced</td>
          <td class="rate rate-reduced">Reduced</td>
          <td class="rate rate-standard">Standard</td>
          <td class="rate rate-parking">Parking</td>
        </tr>

        <?php foreach($json as $country_code => $data) : ?>
        <tr>
          <td class="country"><?= $data['country'] ?></td>
          <td class="country"><?= $country_code ?></td>
          <td class="rate rate-super-reduced"><?= ($data['rates']['superReduced'] ? $data['rates']['superReduced'] : '-') ?></td>
          <td class="rate rate-reduced">
            <? $reduced = '-';
               if ($data['rates']['reduced']) {
                 $reduced = join($data['rates']['reduced'], ' / ');
               }
            ?>
            <?= $reduced ?>
          </td>
          <td class="rate rate-standard"><?= ($data['rates']['standard'] ? $data['rates']['standard'] : '-') ?></td>
          <td class="rate rate-parking"><?= ($data['rates']['parking'] ? $data['rates']['parking'] : '-') ?></td>
        </tr>


        <?php endforeach; ?>
      </tbody>
    </table>
  </div>


  <!-- PHP -->
  <div class='list' id='list-php'>
    <h2>vatrates.php</h2>

    <table>
      <tbody>
        <tr class="legenda">
          <td class="country">Country</td>
          <td class="country-code">Code</td>
          <td class="rate rate-super-reduced">Super reduced</td>
          <td class="rate rate-reduced">Reduced</td>
          <td class="rate rate-standard">Standard</td>
          <td class="rate rate-parking">Parking</td>
        </tr>

        <?php foreach($VATRates as $country_code => $data) : ?>
        <tr>
          <td class="country"><?= $data['country'] ?></td>
          <td class="country"><?= $country_code ?></td>
          <td class="rate rate-super-reduced"><?= ($data['rates']['superReduced'] ? $data['rates']['superReduced'] : '-') ?></td>
          <td class="rate rate-reduced">
            <? $reduced = '-';
               if ($data['rates']['reduced']) {
                 $reduced = join($data['rates']['reduced'], ' / ');
               }
            ?>
            <?= $reduced ?>
          </td>
          <td class="rate rate-standard"><?= ($data['rates']['standard'] ? $data['rates']['standard'] : '-') ?></td>
          <td class="rate rate-parking"><?= ($data['rates']['parking'] ? $data['rates']['parking'] : '-') ?></td>
        </tr>


        <?php endforeach; ?>
      </tbody>
    </table>
  </div>

</div> <!-- /#lists -->

</body>
</html>