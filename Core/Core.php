<?php

class Core
{

    public function __construct()
    {
        $this->run();
    }

    public function run()
    {
        $parametro = [];
        if (isset($_GET['pag'])) {
            $url = $_GET['pag'];
        }

        if (!empty($url)) {
            $url = explode('/', $url);
            $controller = $url[0] . 'Controller'; //classe
            array_shift($url);

            if (isset($url[0]) && !empty($url[0])) {
                $metodo = $url[0];
                array_shift($url);
            } else {
                $metodo = 'index';
            }

            if (count($url) > 0) {
                $parametro = $url;
            }
        } else {
            $controller = 'homeController';
            $metodo = 'index';
        }

        $caminho = 'mvc/controllers/' . $controller . 'php';
        if (!file_exists($caminho) && !method_exists($controller, $metodo)) {
            $controller = 'homeController';
            $metodo = 'index';
        }
        $c = new $controller;
        call_user_func_array(array($c, $metodo),  $parametro);
    }
}