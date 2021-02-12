<?php
header('Content-type: application/json');
include 'conexao.php';

class produtos extends conexao
{
    public function pesquisar(String $valor)
    {
        $pdo = $this->pdo();
        $sql = "SELECT * FROM produtos WHERE nome like :n";
        $exe = $pdo->prepare($sql);
        $exe->bindValue(':n', '%' . $valor . '%');
        $exe->execute();

        if ($exe->rowCount() > 0) {
            $retorno = $exe->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $retorno = [];
        }
        echo json_encode($retorno);
    }

    public function comprar()
    {
        $data = file_get_contents("php://input");
    }
}