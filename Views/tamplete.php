<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/css/bootstrap.css">
    <link rel="stylesheet" href="views/css/personal-home.css">
    <link rel="stylesheet" href="views/icon/css/all.css">
    <link rel="stylesheet" href="views/css/style.css">

    <title>Home Page</title>
    <style>
    body {
        background-image: url("views/img/1.jpg");
    }
    </style>
</head>

<body>
    <div class='row'>
        <nav class="col-md-2 d-none d-md-block sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column conteudo-menu">

                    <input type="text" onkeyup="pesquisar()" id="pesquisa" placeholder="pesquisar produto...">
                    <div id="resultado">
                        o resultado fica aqui
                    </div>

                </ul>
            </div>
        </nav>

        <?php
        $this->carregarViewNoTamplete($nomeview, $dadosModel);
        ?>
        <script src="views/js/jquery.js"></script>
        <script src="views/js/home.js"></script>
    </div>
</body>

</html>