
let urlCarros = `https://parallelum.com.br/fipe/api/v1/carros/marcas`
let listaCarros = document.querySelector(".listaCarros")

let urlMotos = `https://parallelum.com.br/fipe/api/v1/motos/marcas`
let listaMotos = document.querySelector(".listaMotos")

let urlCaminhoes = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas`
let listaCaminhoes = document.querySelector(".listaCaminhoes")

function pegaApi(url)
{
    let req = new XMLHttpRequest()
    req.open("GET", url, false)
    req.send()
    return req.responseText
}
function adicionaLinha(marca)
{
    let iten = document.createElement("li")
    iten.setAttribute("value", marca.codigo)
    iten.addEventListener('click', escolheMarca)
    iten.innerHTML = marca.nome        

    return iten
}

function main(url,lista)
{
    let data = pegaApi(url)
    let marcas = JSON.parse(data)

    marcas.forEach(element => {
        let iten = adicionaLinha(element)
        lista.appendChild(iten)
    });
}

function escolheMarca(evento)
{
    let marcaClicada = evento.target.value

    let elemento = evento.target.parentNode
    let nomeId = elemento.getAttribute("id") 
    //nomeId --> É o nome do id do pai do elemento clicado, ex : carros
    //marcaClicada --> pega o código da marca clicada

     url = `https://parallelum.com.br/fipe/api/v1/${nomeId}/marcas/${marcaClicada}/modelos`


     let data = pegaApi(url)
     let marcas = JSON.parse(data)
     let tam = marcas.modelos.length

     let vet = []
     for(let i = 0; i < tam; i++)
    {
        vet[i] = (marcas.modelos[i].nome)
    }
    vet.sort()

    let tam2 = vet.length

    let novaLista = document.createElement("ul")

    for(let i = tam2 - 1; i >= 0; i--)
    {
        let novoIten = document.createElement("li")
        novoIten.innerHTML = vet[i]
        novoIten.classList.add("carro")
        novaLista.appendChild(novoIten)
    }

    
    evento.target.appendChild(novaLista)
    evento.target.addEventListener("click", removeVeiculos)

}

function removeVeiculos(evento) //Não permite que mostre a lista de veiculos mais de uma vez
{
    let liApagar = evento.target.children[0] //Lista a ser apagada
    liApagar.parentNode.removeChild(liApagar)    
}

main(urlCarros, listaCarros)
main(urlMotos, listaMotos)
main(urlCaminhoes, listaCaminhoes)


