res = document.getElementById('resultado')
function pesquisar() {
    var valor = document.getElementById('pesquisa').value
    res.innerHTML = '';
    if (valor != '') {
        $.ajax
            ({
                url: 'API/pesquisa/',
                type: 'post',
                dataType: 'json',
                data: { id: valor },
                success: function (dados) {
                    for (let i = 0; i < dados.length; i++) {
                        let nome = dados[i]['nome']
                        let preco = dados[i]['preco']
                        console.log(nome)
                        res.innerHTML += nome +
                            `<div class='text-left'><button id='al1' onClick="addFatura( '${nome}', '${preco}' )" class='btn btn-primary b2'><i class='fa fa-plus'></i> </button><div><hr>`
                    }

                },
                error: function (erro) {
                    console.log(erro)
                }
            })
    }
}

function addFatura(nome, preco) {
    let fatura = document.getElementById('produtos')
    let qtd = document.getElementById('qtd')
    let preco_pag
    alert(preco_pag)
    if (qtd == null) {
        preco_pag = qtd * preco
    }
    else {
        preco_pag = preco
    }

    let addProd = `<tr><td>${nome}</td> <td><input id='qtd' type='number' value='1' style="width: 20%;"> </td> <td> ${preco}.00 kz </td> <td>${preco_pag}</td></tr>`
    fatura.innerHTML += addProd

}



$('#pesquisa').blur(function () {
    // res.innerHTML = '';
})

$('#al1').click(function () {
    alert('funfa')
})