<?php

spl_autoload_register(function ($nome_arquivo) {
    if (file_exists('get/' . $nome_arquivo . '.php')) {
        require 'get/' . $nome_arquivo . '.php';
    } elseif (file_exists('login/' . $nome_arquivo . '.php')) {
        require 'login/' . $nome_arquivo . '.php';
    } elseif (file_exists('core_api/' . $nome_arquivo . '.php')) {
        require 'core_api/' . $nome_arquivo . '.php';
    }
});