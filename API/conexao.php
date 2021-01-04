<?php

class conexao
{
    public function pdo()
    {
        try {
            $pdo = new PDO("mysql:host=localhost;dbname=loja", "root", "");
        } catch (PDOException $e) {
            var_dump($e);
        }
        return $pdo;
    }
}