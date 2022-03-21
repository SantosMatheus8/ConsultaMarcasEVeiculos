
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
    iten.addEventListener('click', () => escolheMarca(event))
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

function escolheMarca(event)
{
    let marcaClicada = event.target.value

    let elemento = event.target.parentNode
    let nomeId = elemento.getAttribute("id") 
    //nomeId --> É o nome do id do pai do elemento clicado, ex : carros
    //marcaClicada --> pega o código da marca clicada

     url = `https://parallelum.com.br/fipe/api/v1/${nomeId}/marcas/${marcaClicada}/modelos`


     let data = pegaApi(url)
     let marcas = JSON.parse(data)
     let tam = marcas.modelos.length

    for(let i = 0; i < tam; i++)
    {
        console.log(marcas.modelos[i].nome)
    }


}

function aux(marcas)
{
    console.log(marcas.modelos[1].nome)
    marcas.forEach(element => {
       element.modelos
    });
}

main(urlCarros, listaCarros)
main(urlMotos, listaMotos)
main(urlCaminhoes, listaCaminhoes)
