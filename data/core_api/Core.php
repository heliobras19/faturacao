<?php

class Core
{

    public function __construct()
    {
        $this->callFunc();
    }
    public function url()
    {
        $url = explode('/', $_GET['pag']);
        return $url;
    }

    public function callFunc()
    {
        $parametro = [];
        $url = $this->url();
        $class  = $url[0];
        array_shift($url);

        if (isset($url) && !empty($url)) {
            $funcao = $url[0];
            array_shift($url);
        }
        if (count($url) > 0) {
            $parametro = $url;
        }
        if (!isset($funcao)) {
            $funcao = 'index';
        }
        $caminho = 'http/' . $class . '.php' . '/' . $funcao . '/';
        $arquivo = 'http/' . $class . '.php';
        if (file_exists($arquivo) && method_exists($class, $funcao)) {
            $c = new $class;
            call_user_func_array(array($c, $funcao),  $parametro);
        } else {
            echo $caminho;
        }
    }
}