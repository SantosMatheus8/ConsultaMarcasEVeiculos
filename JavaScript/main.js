//CARRO -------
let botaoCarro = document.querySelector(".botaoCarro")
let listaCarro = document.querySelector(".listaCarros")
let setaCarro = document.querySelector(".setaCarro")
let setaRecolherCarro = document.querySelector(".setaRecolherCarro")

function mudaCoreSetaCarro()
{
    botaoCarro.classList.toggle('botaoAtivo')
    setaCarro.classList.toggle('tiraExpandir')
    setaRecolherCarro.classList.toggle('mostraSetaRecolher')
}

botaoCarro.addEventListener('click', () =>
{
        listaCarro.classList.toggle('ativaAccordion')
})

//MOTO -------
let botaoMoto = document.querySelector(".botaoMoto")
let listaMoto = document.querySelector(".listaMotos")
let setaMoto = document.querySelector(".setaMoto")
let setaRecolherMoto = document.querySelector(".setaRecolherMoto")

function mudaCoreSetaMoto()
{
    botaoMoto.classList.toggle('botaoAtivo')
    setaMoto.classList.toggle('tiraExpandir')
    setaRecolherMoto.classList.toggle('mostraSetaRecolher')
}

botaoMoto.addEventListener('click', () =>
{
        listaMoto.classList.toggle('ativaAccordion')
})

//Caminhao -------
let botaoCaminhao = document.querySelector(".botaoCaminhao")
let listaCaminhao = document.querySelector(".listaCaminhoes")
let setaCaminhao = document.querySelector(".setaCaminhao")
let setaRecolherCaminhao = document.querySelector(".setaRecolherCaminhao")

function mudaCoreSetaCaminhao()
{
    botaoCaminhao.classList.toggle('botaoAtivo')
    setaCaminhao.classList.toggle('tiraExpandir')
    setaRecolherCaminhao.classList.toggle('mostraSetaRecolher')
}

botaoCaminhao.addEventListener('click', () =>
{
        listaCaminhao.classList.toggle('ativaAccordion')
})

