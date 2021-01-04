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
                    res.innerHTML += dados[i]['nome'] + "<i class='fa fa-plus'></i><br>"
                }

            },
            error: function (erro) {
                console.log(erro)
            }
        })
}

$('#pesquisa').blur(function () {
    // res.innerHTML = '';
})