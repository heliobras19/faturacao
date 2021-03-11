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
    public function insert($quantidade, $id, $fatura)
    {
        $sql = "INSERT INTO `comprado` (`quantidade`, `dat`, `fatura_code`, `id_produto`) VALUES (:q, now(), :f, :id)";
        $pdo = $this->pdo();
        $exe = $pdo->prepare($sql);
        $exe->bindValue(":q", $quantidade);
        $exe->bindValue(":f", $fatura);
        $exe->bindValue(":id", $id);
        $exe->execute();
        if ($exe) {
            echo "sucess";
        } else {
            echo "error";
        }
    }

    function select($tabela, $condicao)
    {
        $sql = "SELECT * FROM $tabela ";
        $pdo = $this->pdo();
        $exe = $pdo->prepare($sql);
        $exe->execute();
        return $exe;
    }
}