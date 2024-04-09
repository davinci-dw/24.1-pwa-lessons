class Gato {
    constructor(nombre, peso, color, altura) {
        this.nombre = nombre
        this.peso = peso
        this.color = color
        this.altura = altura
    }
}

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