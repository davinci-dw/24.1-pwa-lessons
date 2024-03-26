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