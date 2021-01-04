<?php

class noticiaController extends Controller
{
    public function index()
    {
        $this->carregarTamplete('noticia');
    }
}