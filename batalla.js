
var datosDelBarco = [];
var datosDelBarco2 = [];
var aciertostotales = 0;
var aciertostotales2 = 0;
var nombre1=[];
var nombre2=[];


alert("Battle ship ");
board(); 
alert("Solo tienes 3 barcos");
jugador1();
jugador2();

var datosdeljugador = [];

function board(){
    alert("ingrese jugadores");
var nom1 = prompt("Ingrese el nombre del jugador 1");
var nom2 = prompt("Ingrese el nombre del jugador 2");
    var tab1  = [0,0,0,0,0];
    var tab2 = [0,0,0,0,0];
    console.log("el tablero de  " + nom1 + " es: ");
    console.log(tab1)
    console.log("el tablero de    " + nom2 + " es: " );
    console.log(tab2); 
    nombre1.push(nom1);
    nombre2.push(nom2);
}



function jugador1(i){
var inicio = 0;
for (var i = 1; i <=inicio; i++){
    barcos(i);}
    alert("Jugador 1  "+ nombre1);
    let barco1 = prompt("Ingresa la cordena del primer barco");
    let barco2 = prompt("ingresa la cordenada del segundo barco");
    let barco3 = prompt("ingresa la cordena del tercer barco ");
    var datosdelbarco = {
        barco1: barco1,
        barco2: barco2,
        barco3: barco3,
    
    }
    datosDelBarco.push(datosdelbarco);

}
function jugador2(i){
var inicio = 0;
for (var i = 1; i <=inicio; i++){
    barco2(i);
}
alert("Jugador 2  "+ nombre2);
let barco1 = prompt("Ingresa la cordena del primer barco");
let barco2 = prompt("ingresa la cordenada del segundo barco");
let barco3 = prompt("ingresa la cordena del tercer barco ");;
    var datosdelbarco = {
        barco1: barco1,
        barco2: barco2,
        barco3: barco3,
    
    }
    datosDelBarco2.push(datosdelbarco); 

}
cordenadas();

var inicio2 = prompt("¿quieres continuar con el ataque?");
if (inicio2 == "si"){
cordenadas();
}
switch (inicio2) {
    case "si":
        cordenadas();
        
        break;

    case "no":
        alert("Perdiste ")
        break;
}
function cordenadas(){
    
    var barco = "";
          for(let i = 1; i < datosDelBarco.length; i++){
            barco = datosDelBarco[i].datosdelbarco+"\n";
          }
          var barco = prompt(nombre2+" ingresa la cordenada de ataque");
                    for(let i = 0; i < datosDelBarco.length; i++){
                        if(datosDelBarco[i].barco1 == barco){
                            alert("Hundio un barco enemigo"); 
                            aciertostotales++;
                        }
                    }
                    for(let i = 0; i < datosDelBarco.length; i++){
                        if(datosDelBarco[i].barco2 == barco){
                            alert("Hundio un barco enemigo");  
                            aciertostotales++;
                        }
                    }
                    for(let i = 0; i < datosDelBarco.length; i++){
                        if(datosDelBarco[i].barco3 == barco){
                            alert("Hundio un barco enemigo");  
                            aciertostotales++;
                        }
                    }
                    if(aciertostotales == 3){
                        alert("Hundiste todos los barcos ganaste  "+ nombre1);
                    }
                    var barco = "";
          for(let i = 0; i < datosDelBarco2.length; i++){
            barco = datosDelBarco2[i].datosdelbarco+"\n";
          }
          var barcos = prompt(nombre1+" ingresa la cordenada de ataque");
                    for(let i = 0; i < datosDelBarco2.length; i++){
                        if(datosDelBarco2[i].barco1 == barcos){
                            alert("Hundio un barco enemigo"); 
                             aciertostotales2++;
                        }
                    }
                    for(let i = 0; i < datosDelBarco.length; i++){
                        if(datosDelBarco2[i].barco2 == barcos){
                            alert("Hundio un barco enemigo"); 
                             aciertostotales2++;; 
                        }
                    }
                    for(let i = 0; i < datosDelBarco.length; i++){
                        if(datosDelBarco2[i].barco3 == barcos){
                            alert("Hundio un barco enemigo"); 

                        }
                    }
                    if(aciertostotales2 == 3){
                        alert("Hundiste todos los barcos ganaste  "+ nombre2);
  
                    }
                      var inicio2 = prompt("Deseas continuar con el ataque");
                    switch (inicio2) {
                        case "si":
                            cordenadas();
                            
                            break;
    
                        case "no":
                            alert("Perdiste ")
                            break;
                    }
                   
 }
