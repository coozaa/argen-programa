// definimos la funcion hola mundo

function holaMundo() {

    console.log("hola mundo")
}

//podemos llamar la funcion todas las veces que queramos
holaMundo()
holaMundo()


function sumar(a,b) {

    var resultado = a+b;
    return resultado;

}

suma = sumar(3,4);
console.log(suma);

//tambien lo podemos hacer asi (sumar)

function sumar(a,b) {

    return a+b;
}

suma = sumar(3,4);
console.log(suma);