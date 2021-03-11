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
        $quantidade = $_POST['quantidade'];
        $fatura = $_POST['fatura'];
        $id = $_POST['id'];
        print_r($this->insert($quantidade, $id, $fatura));
    }
}