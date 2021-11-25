var bienvenida = alert("Bienvenido al juego de batalla naval");
menu();
function menu(){
    var menu = prompt("¿Que desea hacer?\n1. Jugar\n2. Instrucciones\n3. Salir");
    if(menu == 1){
        jugar();
        
    }
    else if(menu == 2){
        instrucciones();
    }
    else if(menu == 3){
        salir();
    }
    else{
        alert("Ingrese una opcion valida");
        menu();
    }
}

  
function jugar(){
    //pedir nombres de jugadores
    alert("ingrese jugadores");
    var nom1 = prompt("Ingrese el nombre del jugador 1");
    var nom2 = prompt("Ingrese el nombre del jugador 2");
   
   
   //pedir datos de los barcos
    alert("coloque sus barcos, el jugador debe poner como minimo 3 barcos y como maximo 5 barcos")
    var barco1 = prompt("Ingrese el numero de barcos del jugador 1");
    for(var i = 0; i < barco1; i++){
        var barcoP = prompt("Ingrese la posicion de barcos del jugador 1");
        
    }
           
    }
    var barco2 = prompt("Ingrese el numero de barcos del jugador 2");
    for(var j = 0; j < barco2; j++){
        var barcoPo = prompt("Ingrese la posicion de barcos del jugador 2");
    }
    alert("el juego comienza");

    //datos tablero
    var tablero1 = [X,X,X,X,X,X,X,X,X,X];
    var tablero2 = [X,X,X,X,X,X,X,X,X,X];

    var anuncio = console.log("el jugador 1 es: " + nom1 + " y su tablero es de 10*10: " + tablero1 + "\n" +
     "el jugador 2 es: " + nom2 + " y su tablero es 10*10: " + tablero2);
    alert("el jugador 1 tiene " + barcoNuevo + " barcos");
    alert("el jugador 2 tiene " + barcoNuevo2 + " barcos");
    alert("el jugador 1 tiene " + tablero1 + " y el jugador 2 tiene " + tablero2);
    alert("el tablero del jugador 1 es: " + tablero1 + "\n" +
              "el tablero del jugador 2 es: " + tablero2);
    
   //acceder al arreglo depende la pocision que se ponga
   




function instrucciones(){
       let instrucciones = alert("el juego consiste en atinarle a una posicion" + "\n" +
                                  "del enemigo donde se encuentre el barco, ingresando un numero que corresponda al rango de posiciones");

}