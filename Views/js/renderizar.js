var res = document.getElementById('resultado')
var printer = document.getElementById('produtos')
var produtos = [];
function pesquisar() {
    var valor = document.getElementById('pesquisa').value
    res.innerHTML = '';
    if (valor != '') {
        $.ajax
            ({
                url: 'data/produtos/pesquisar/' + valor,
                type: 'get',
                dataType: 'json',
                success: function (dados) {
                    for (let i = 0; i < dados.length; i++) {
                        let nome = dados[i]['nome']
                        let preco = dados[i]['preco']
                        let id = dados[i]['idprodutos']
                        let qtd = 0
                        res.innerHTML += nome +
                            `<div class='text-left'><button onclick="addVetor('${nome}', '${id}', '${qtd}')" id='al1 class='btn btn-primary b2'><i class='fa fa-plus'></i> </button><div><hr>`
                    }

                },
                error: function (erro) {
                    console.log(erro)
                }

            })
    }
}

function addVetor(nome, id, qtd) {
    produtos.push(Array(nome, id, qtd))
    console.log(produtos)
    renderiza()
}

function renderiza() {
    for (let i = 0; i < produtos.length; i++) {
        let addProd = `<tr><td>ola</td> <td> <input id='' type='number' min='0'  value='1' style="width: 20%;"> </td>
                            <td id='precoUni'> .00 kz </td> 
                            <td> <input type='text' id='' readonly> </td>
                        </tr>`
        printer.innerHTML = addProd
    }
}