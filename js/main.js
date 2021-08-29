let jugadores=[{jugador:1, vidas:5, poder:8000, avatar:"../img/kakashi.gif"},
    {jugador:2, vidas:3, poder:5000, avatar:"../img/pj.jpg"},
    {jugador:3, vidas:9, poder:20000, avatar:"../img/solaire.jpg"},
    {jugador:4, vidas:4, poder:5030, avatar:"../img/tsunade.jpg"},
    {jugador:5, vidas:1, poder:150000, avatar:"../img/pj2.jpg"}];




function CrearTitulo(){
    const contenedorTitulo=document.createElement('div');
    contenedorTitulo.classList="container text-center";
    const titulo=document.createElement('h1');
    titulo.classList="h1"
    titulo.textContent="Presentación de jugadores"
    contenedorTitulo.appendChild(titulo);
    document.body.appendChild(contenedorTitulo);
}

function IncluirJugadores(){
    const contenedorJugadores=document.createElement('div');
    contenedorJugadores.classList="container align-items-center";
    console.log(jugadores.length);
    for(let i=0; i<jugadores.length;i++){
        let tarjeta=document.createElement('div');
        tarjeta.classList="card mt-2 mb-2";
        let imagenJugador=document.createElement('img');
        imagenJugador.classList="card-img-top imagenTarjeta";
        console.log(jugadores[i].avatar);
        imagenJugador.src=jugadores[i].avatar;
        tarjeta.appendChild(imagenJugador);
        let infoJugador=document.createElement('div');
        infoJugador.classList='card-body';
        let numeroVidaPoder=document.createElement('p');
        numeroVidaPoder.classList='card-text';
        numeroVidaPoder.textContent=`Este es el jugador número: ${jugadores[i].jugador}
        Vidas: ${jugadores[i].vidas}
        Poder: ${jugadores[i].poder}`
        infoJugador.appendChild(numeroVidaPoder);
        tarjeta.appendChild(infoJugador);
        contenedorJugadores.appendChild(tarjeta);
    }
    document.body.appendChild(contenedorJugadores);
}



function main(){
    CrearTitulo();
    IncluirJugadores();
}


main()





