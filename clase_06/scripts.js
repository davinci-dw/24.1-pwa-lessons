class Gato {
    constructor(nombre, peso, color, altura) {
        this.nombre = nombre
        this.peso = peso
        this.color = color
        this.altura = altura
    }
}

const listaMichis = [];

const actualizarLista = (lista) => {
    lista.forEach(michi => {
        listaMichis.push(
            new Gato(
                michi.nombre,
                michi.peso,
                michi.color,
                michi.altura
            )
        )
    });
}

const actualizarVista = () => {
    const contenedor = document.getElementById('gatos');
    listaMichis.forEach(michi => {
        contenedor.innerHTML += `
        <article style="border: 1px solid #000">
            <h1 style="color: red;font-size: 2rem;">${michi.nombre}</h1>
            <h2>peso: ${michi.peso}</h2>
            <h3>altura: ${michi.altura}</h3>
            <h4>color: ${michi.color}</h4>
        </article>
        `;
    })
}


const actualizarDatosConAjax = () => {
    const query = new XMLHttpRequest();
    query.open('GET', '/michis.json', true);
    query.send();
    
    query.onreadystatechange = function () {
        if(query.readyState == 4) {
            if(query.status == 200) {
                console.log("llegó");
                const respuesta = JSON.parse(query.responseText);
                actualizarLista(respuesta.lista);
                actualizarVista();
                console.log(listaMichis)
            } else if(query.status == 404){
                console.error("Recurso no encontrado");
            } else {
                console.error("pasó otra cosa");
            }
        }
    }
}

const actualizarDatosConFetch = () => {
    fetch('/michis.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        actualizarLista(respuesta.lista);
        actualizarVista();
    })
}

//actualizarDatosConAjax();

actualizarDatosConFetch();

if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js')
    .then(() => {
        //console.info("registrado");
    })
    .catch(() => {
        console.error("falló");
    });
}
