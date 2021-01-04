<?php

class Controller
{
    public $dados;

    public function __construct()
    {
        $this->dados = array();
    }

    public function carregarTamplete($nomeview, $dadosModel = array())
    {
        $this->dados = $dadosModel;
        require 'Views/tamplete.php';
    }

    public function carregarViewNoTamplete($nomeview, $dadosModel = array())
    {
        extract($dadosModel);
        require 'Views/' . $nomeview . '.html';
    }
}