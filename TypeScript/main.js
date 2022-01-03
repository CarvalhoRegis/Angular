var minhaVar = 'Minha Var';
function minhaFinc(x, y) {
    return x + y;
}
// var = le
var num = 2;
//bollean = const
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) { return valor * 2; }); //arrow functions
//ou
numeros.map(function (valor) {
    return valor * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//tipo de variaveis
var n1 = 'um'; //para nenhum tipo
var nome = 'gabriel';
