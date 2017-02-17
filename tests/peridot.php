<?php

use Evenement\EventEmitterInterface;
use Peridot\Console\Environment;

return function (EventEmitterInterface $emitter) {
    $emitter->on('peridot.start', function (Environment $env) {
        $env->getDefinition()->getArgument('path')->setDefault('tests/peridot');
    });
};
