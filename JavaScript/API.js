
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
function adicionaLinha(marca,lista)
{
    let iten = document.createElement("li")
    let link = document.createElement("a")
    link.href = "paginaModelos.html"
    iten.appendChild(link)
    link.innerHTML = marca.nome
    lista.appendChild(iten)

    return iten
}

function main(url,lista)
{
    let data = pegaApi(url)
    let marcas = JSON.parse(data)


    marcas.forEach(element => {
        let iten = adicionaLinha(element,lista)
        // iten.classList.add(`${element.codigo}`)
        lista.appendChild(iten)
    });
}


main(urlCarros, listaCarros)
main(urlMotos, listaMotos)
main(urlCaminhoes, listaCaminhoes)






