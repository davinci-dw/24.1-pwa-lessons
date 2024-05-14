class Gato {
    constructor(nombre, peso, color, altura, foto) {
        this.nombre = nombre
        this.peso = peso
        this.color = color
        this.altura = altura
        this.foto = foto
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
                michi.altura,
                michi.foto
            )
        )
    });
}

const actualizarVista = () => {
    const contenedor = document.getElementById('gatos');
    listaMichis.forEach(michi => {
        contenedor.innerHTML += `
        <div class="card">
            <div class="card-image">
            <img src="${michi.foto}">
            <span class="card-title">${michi.nombre}</span>
            </div>
            <div class="card-content">
                <p>peso: ${michi.peso}</p>
                <p>altura: ${michi.altura}</p>
                <p>color: ${michi.color}</p>
            </div>
            <div class="card-action">
            <a href="#">This is a link</a>
            </div>
        </div>
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
