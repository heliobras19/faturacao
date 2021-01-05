res = document.getElementById('resultado')
function pesquisar() {
    var valor = document.getElementById('pesquisa').value
    var escrever = false
    res.innerHTML = '';
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
                    res.innerHTML += nome +
                        `<div class='text-left'><button id='al1' onclick='addFatura('${preco, nome}')' class='btn btn-primary b2'><i class='fa fa-plus'></i> </button><div><hr>`
                }

            },
            error: function (erro) {
                console.log(erro)
            }
        })
}

function addFatura(nome_prod, preco_prod) {
    console.log(nome_prod)
}

$('#pesquisa').blur(function () {
    // res.innerHTML = '';
})

$('#al1').click(function () {
    alert('funfa')
})