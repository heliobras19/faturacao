function gerar_fatura_code() {
    var hexadecimais = '0123456789ABCDEF';
    var code = '#';
    for (var i = 0; i < 6; i++) {
        code += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return code;
}
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
                url: 'data/produtos/pesquisar/' + valor,
                type: 'get',
                dataType: 'json',
                success: function (dados) {
                    for (let i = 0; i < dados.length; i++) {
                        let nome = dados[i]['nome']
                        let preco = dados[i]['preco']
                        let id = dados[i]['idprodutos']
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
        let addProd = `<tr><td>${nome}</td> <td> <input class='border-none' id='${id}' type='number' min='0' oninput='total(${id}, ${preco}, ${id_preco_tot})' value='1' style="width: 20%;"> </td>
                            <td id='precoUni'> ${preco}.00 kz </td> 
                            <td> <input class='border-none' type='text' id='${id_preco_tot}' readonly> </td>
                        </tr>`
        fatura.innerHTML += addProd
        qtd = parseInt(document.getElementById(id).value)
        prodFatura.push(id)
        prod_lista[id] = Array(id, nome, preco, qtd)
        j++
    }
}

function total(id, preco, exibir) {
    console.log(prod_lista)
    let qtd_preco = parseInt(document.getElementById(id).value)
    document.getElementById(exibir).value = qtd_preco * preco
    var total = document.getElementById('total_pag')
    var total_print = qtd_preco * preco
    x = x + total_print
    total.innerHTML = x
    prod_lista[id][3] = qtd_preco
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
    code = gerar_fatura_code()
    var fim = 'sucess'
    for (let i = 0; i < toSend.length; i++) {
        if (toSend[i] != undefined) {
            comprar(toSend[i][0], toSend[i][3], toSend[i][2], code)
        }
    }
}

function comprar(id, quantidade, preco, code) {
    var ret
    $.ajax({
        url: 'data/produtos/comprar',
        type: 'post',
        dataType: 'html',
        data: { id: id, quantidade: quantidade, preco: preco, fatura: code },
        success: function (value) {
            ret = value
        }
    })
    return ret;
}
