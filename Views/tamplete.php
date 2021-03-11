<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/css/bootstrap.css">
    <link rel="stylesheet" href="views/css/personal-home.css">
    <link rel="stylesheet" href="views/icon/css/all.css">
    <link rel="stylesheet" href="views/css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Philosopher&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet">
    <title>Home Page</title>
    <style>
    .moserat {
        font-family: 'Roboto Mono', monospace;
    }

    .logo {
        font-family: 'Philosopher', sans-serif;
        font-size: 30px;
    }

    .fonte {
        font-family: 'Philosopher', sans-serif;
        font-size: 25px;
    }

    .nav-pills {
        color: white;
    }
    </style>
</head>

<body>
    <nav class="nav nav-pills nav-fill navbar-dark">
        <li class="nav-item nav-link logo" href="#">SIGE Lite</li>

        <li class="nav-item nav-link fonte">
            <span>Heliobras3@hotmail.com</span>
        </li>
        <li class="nav-item nav-link">
            <i class="fa fa-2x fa-server" data-toggle="modal" data-target=".bd-example-modal-lg" aria-hidden="true"></i>
        </li>
        <li class="nav-item nav-link " href="#">

            <div class="dropdown">
                <i class="fa fa-2x fa-cog" aria-hidden="true"></i>
                <span class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="pading fa fa-2x fa-power-off" aria-hidden="true"></i>
                </span>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Alguma ação</a>
                    <a class="dropdown-item" href="#">Outra ação</a>
                    <a class="dropdown-item" href="#">Alguma coisa aqui</a>
                </div>
            </div>

        </li>
    </nav>
    <div class="espaco">
    </div>
    <div class='row'>
        <nav class="col-md-2 d-none d-md-block sidebar moserat  ">
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
        <script src="views/js/poper.js"></script>
        <script src="views/js/bootstrap.js"></script>
        <script src="views/js/home.js"></script>
    </div>
</body>

</html>