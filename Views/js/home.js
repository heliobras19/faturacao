res = document.getElementById('resultado')
var prodFatura = []
var prod_lista = []
var j = 0
var x = 0
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
        var qtd;
        let id_preco_tot = Math.sqrt(id) * 0.15
        let fatura = document.getElementById('produtos')
        var preco_pag = 0;
        let addProd = `<tr><td>${nome}</td> <td> <input id='${id}' type='number' min='0' oninput='total(${id}, ${preco}, ${id_preco_tot})' value='1' style="width: 20%;"> </td>
                            <td id='precoUni'> ${preco}.00 kz </td> 
                            <td> <input type='text' id='${id_preco_tot}' readonly> </td>
                        </tr>`
        fatura.innerHTML += addProd
        qtd = parseInt(document.getElementById(id).value)
        prodFatura.push(id)
        prod_lista[j] = Array(id, nome, preco, qtd)
        j++
    }
}

function total(id, preco, exibir) {
    let qtd_preco = parseInt(document.getElementById(id).value)
    document.getElementById(exibir).value = qtd_preco * preco
    var total = document.getElementById('total_pag')
    var total_print = qtd_preco * preco
    x = x + total_print
    total.innerHTML = x
}

function addAray(nome, preco) {
    let produtos = [];
    produtos.insert(1, nome, preco)
    console.log(produtos)
}


$('#faturar').click(function () {
    fatura(prod_lista)
    print()
})

function fatura(toSend) {
    const jsonString = JSON.stringify(toSend)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http')
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(jsonString)
}