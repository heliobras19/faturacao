res = document.getElementById('resultado')
var prodFatura = []
function pesquisar() {
    var valor = document.getElementById('pesquisa').value
    res.innerHTML = '';
    if (valor != '') {
        $.ajax
            ({
                url: 'api/produtos/pesquisar/' + valor,
                type: 'get',
                dataType: 'json',
                success: function (dados) {
                    for (let i = 0; i < dados.length; i++) {
                        let nome = dados[i]['nome']
                        let preco = dados[i]['preco']
                        let id = dados[i]['idprodutos']
                        console.log(nome)
                        res.innerHTML += nome +
                            `<div class='text-left'><button id='al1' onClick="addFatura( '${nome}', '${preco}', ${id} )" class='btn btn-primary b2'><i class='fa fa-plus'></i> </button><div><hr>`
                    }

                },
                error: function (erro) {
                    console.log(erro)
                }
            })
    }
}

function addFatura(nome, preco, id) {
    if (prodFatura.indexOf(id) > -1) {
        alert('ja foi posto')
    } else {

        let fatura = document.getElementById('produtos')
        let qtd = document.getElementById('qtd')
        //alert(preco_pag)

        let addProd = `<tr><td>${nome}</td> <td><input id='${id}' onkeypress='(addAray(${id}, ${preco}))' type='number' value='1' style="width: 20%;"> </td> <td> ${preco}.00 kz </td> <td>${preco_pag}</td></tr>`
        fatura.innerHTML += addProd

        prodFatura.push(id)
    }

}

function addAray(nome, preco) {
    let produtos = [];
    produtos.insert(1, nome, preco)
    console.log(produtos)
}


$('#pesquisa').blur(function () {
    // res.innerHTML = '';
})

$('#al1').click(function () {
    alert('funfa')
})