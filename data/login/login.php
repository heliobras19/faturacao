<?php
//header('Content-type: application/json');
include_once "../conexao.php";

class logar extends conexao
{
    public function login(String $nome, String $senha)
    {
        $pdo = $this->pdo();
        $sql = "SELECT * FROM conta WHERE nome = :n AND senha = :s";
        $execute = $pdo->prepare($sql);
        $execute->bindValue('n', $nome);
        $execute->bindValue(':s', $senha);
        $execute->execute();
        if ($execute->rowCount() > 0) {
            $data = $execute->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $data = [];
        }
        return json_encode($data);
    }
}

$c = new  logar();
$nome = $_POST['id'];
$senha = $_POST['cod'];
echo $c->login($nome, $senha);