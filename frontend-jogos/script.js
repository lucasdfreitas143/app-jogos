const API_URL = 'http://localhost:3000/jogos';

const formJogo = document.getElementById('form-jogo');
const tituloForm = document.getElementById('titulo-form');
const listaJogos = document.getElementById('lista-jogos');
const inputId = document.getElementById('jogo-id');
const btnCancelar = document.getElementById('btn-cancelar');

async function carregarJogos(query=''){
    const resposta = await fetch(`${API_URL}${query}`);
    const jogos = await resposta.json();
    renderizarJogos(jogos);
}

function renderizarJogos(jogos){
    listaJogos.innerHTML = '';
    
    jogos.forEach((jogos) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${jogos.titulo}</td>
        <td>${jogos.genero}</td>
        <td>${jogos.plataforma}</td>
        <td>${jogos.ano}</td>
        <td>${jogos.nota ?? '-'}</td>
        <td>
        <button class ="btn-editar" data-id="${jogos.id}">Editar</button>
        <button class ="btn-excluir" data-id="${jogos.id}">Excluir</button>
        </td>
    `;
    listaJogos.appendChild(linha);
});
};

carregarJogos();