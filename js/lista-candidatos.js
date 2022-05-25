/* Exemplos gerais de jQuery */
const titulo = $('h1');
console.log(titulo);

/* text() e html() */
titulo.text('Relação de Candidatos');

/* Script para carregar a lista de candidatos
da API */

let urlCandidatos = 'http://localhost:3000/candidatos';
const botao = $('#carregar');
const lista = $('#lista');

botao.on('click', function(){
    $.ajax({
        url: urlCandidatos,
        dataType: 'json',
        method: 'GET',
        success:function(resposta){
            lista.html('');//deixan a lista vazia inicialmente
           /* looop $.each 
           Para cada resposta vinda da API,acesse o 
           índice(valor númerico) e o conteudo*/
           $.each(resposta, function( indice, conteudo){
                console.log(indice);
                console.log(conteudo);

                lista.append(
                    `<li class="list-group-item">
                    ${conteudo.nome}
                    </li>`
                    
                )
           });
        }
        });
});