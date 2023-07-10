/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda 
azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem 
que está selecionado.

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima 
        de um deles.
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele. 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a 
    descrição do personagem grande.
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele.
        passo 2 - alterar a imagem do personagem grande.
        passo 3 - alterar o nome do personagem grande.
        passo 4 - alterar a descrição do personagem grande.
*/
/*Descricao personagens
data-description="Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu 
com ele quando criança, mas não consegue controlá-los">
                 
data-description="Jean Grey é uma mutante nível ômega e o principal avatar da Força Fênix, no qual 
manifesta poderes cósmicos. A telepatia e telecinese">

data-description="Ela tem o poder de atravessar matéria sólida,campos de energia,rajadas ópticas,
 continuando intacta,e também tem o poder de andar no ar">

data-description="Tem o poder de controlar as forças da natureza, muito poderosa ela pode produzir
 raios, chuvas, gelos, ventos, neblina, entre outros efeitos">

data-description="Ela tem o poder de absorver a vitalidade e memória das pessoas que toca ou no 
caso dos mutantes os poderes e a memória, mas só temporariamente">
 
data-description="Poderes. Garras Metálicas. Fator de Cura Regenerativo, Super Agilidade."

data-description="Ele é um mutante que nasceu com cauda, orelhas pontudas e com o poder de se Teletransportar">

data-description="Ele tem o poder de magnetocinese, ou seja, controlar objetos de metal e criar
 campos magnéticos">*/
// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//         passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima 
//         de um deles.

const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        // faz parte do passo 2 esse debaixo, coloquei aqui porque se ficar em cima
        // começa a travar
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a 
    // descrição do personagem grande.
        // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // passo 2 - alterar a imagem do personagem grande.
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3 - alterar o nome do personagem grande.
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descrição do personagem grande.
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})