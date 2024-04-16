class Gato {
    constructor(nombre, peso, color, altura) {
        this.nombre = nombre
        this.peso = peso
        this.color = color
        this.altura = altura
    }
}

const listaMichis = [];

const michi = new Gato('Michi', '3kg', 'naranja', '30cm');
const bolaDeNieve = new Gato('Bola de Nieve', '5kg', 'blanco', '40cm');
bolaDeNieve.peso = '4kg';

//asignar un alias a un objeto
const miMichi = michi; //asigné la referencia de michi a miMichi

const nombreGato = document.querySelector('#gatos .nombre');
const pesoGato = document.querySelector('#gatos .peso');
const colorGato = document.querySelector('#gatos .color');
const alturaGato = document.querySelector('#gatos .altura');

michi.peso = '50kg';

pesoGato.innerHTML = michi.peso;
nombreGato.innerHTML = michi.nombre;
colorGato.innerHTML = michi.color;
alturaGato.innerHTML = michi.altura;

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

const query = new XMLHttpRequest();
query.open('GET', '/michis.json', true);
query.send();

query.onreadystatechange = function () {
    if(query.readyState == 4) {
        if(query.status == 200) {
            console.log("llegó");
            const respuesta = JSON.parse(query.responseText);
            actualizarLista(respuesta.lista);

            console.log(listaMichis)
        } else if(query.status == 404){
            console.error("Recurso no encontrado");
        } else {
            console.error("pasó otra cosa");
        }
    }
}