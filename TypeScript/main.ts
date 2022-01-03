var minhaVar = 'Minha Var';

function minhaFinc(x: any, y: any){
    return x + y;
}

// var = le
let num = 2;
//bollean = const
const PI = 3.14;

var numeros = [1,2,3];
numeros.map(valor => valor*2); //arrow functions
//ou
numeros.map(function(valor){
    return valor*2;
});

class Matematica{
    soma(x: any, y: any){
        return x + y;
    }
}

//tipo de variaveis para classes
let n1: any = 'um'; //para nenhum tipo 'any'
let nome: string = 'gabriel';