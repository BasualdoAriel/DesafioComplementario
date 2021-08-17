/* Información obtenida desde: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */


let estadoDelJuego=[
    {jugador:1, vidas:5, poder:8000},
    {jugador:2, vidas:3, poder:5000},
    {jugador:3, vidas:9, poder:20000},
    {jugador:4, vidas:4, poder:5030},
    {jugador:5, vidas:1, poder:150000}];



/* Al método .sort se le asigna una función para que compare los valores. Si no se le brinda una función el método sort ordena de forma automática apoyandose en la codificación Unicode */


const IngresarCriterio=_=>(prompt("Ingresá el criterio|VIDAS|JUGADOR|PODER").toUpperCase());

function OrdenarDescendente(criterio) {
    /*
    Si el resultado es <0, el primer indicie se posiciona frente al segundo indice.
    si el resultado es =0 los indices quedan como están.
    si el resultado es >0, el segundo indice se posiciona frente al primer indice. 
    */
    if(criterio=="PODER"){
        estadoDelJuego.sort(function(primerNumero,segundoNumero){
            return (segundoNumero.poder-primerNumero.poder);
        })
    }
    if(criterio=="VIDAS"){
        estadoDelJuego.sort(function(primerNumero,segundoNumero){
            return (segundoNumero.vidas-primerNumero.vidas);
        })
    }
    if(criterio=="JUGADOR"){
        estadoDelJuego.sort(function(primerNumero,segundoNumero){
            return (segundoNumero.jugador-primerNumero.jugador);
        })
    }
    console.table(estadoDelJuego);
}

function OrdenarAscendente(criterio) {
    /* 
    Si el resultado es <0, el primer indicie se posiciona frente al segundo indice.
    si el resultado es =0 los indices quedan como están.
    si el resultado es >0, el segundo indice se posiciona frente al primer indice. 
    */
    if(criterio=="PODER"){
        estadoDelJuego.sort(function(primerNumero,segundoNumero){
            return (primerNumero.poder-segundoNumero.poder);
        })
    }
    if(criterio=="VIDAS"){
        estadoDelJuego.sort(function(primerNumero,segundoNumero){
            return (primerNumero.vidas-segundoNumero.vidas);
        })
    }
    if(criterio=="JUGADOR"){
        estadoDelJuego.sort(function(primerNumero,segundoNumero){
            return (primerNumero.jugador-segundoNumero.jugador);
        })
    }
    console.table(estadoDelJuego);
}

console.log('--------------------');

function main() {
    let criterio=IngresarCriterio();
    OrdenarDescendente(criterio);
    OrdenarAscendente(criterio)
    
}

main();