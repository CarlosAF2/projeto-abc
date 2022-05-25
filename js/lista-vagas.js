// declarando o endereço da nossa API json-server
let url = "http://localhost:3000/vagas";

//Elementos a ser preenchido 
const selectVaga = document.querySelector('#vaga');

/* Ajax (técnica de acesso a dados de API ) */

// featch(url).then(resposta => resposta.json()).then(dados =>{console.log(dados)})

// 1) Acessamos a URL da API em que estão os dados
fetch(url)

// 2) E então (then) colete a resposta
// do servidor no formato json
.then( resposta => resposta.json() )

// 3) Capture os dados da resposta, 
// e faça o que quiser com ela
.then( dados => {
    // console.log(dados);
    selectVaga.innerHTML = "<option></option>";
    
    for(let vaga of dados ){
        let opcao = document.createElement('option');
        opcao.textContent = vaga.titulo;
        opcao.value = vaga.id;
        selectVaga.appendChild(opcao);
    }
});