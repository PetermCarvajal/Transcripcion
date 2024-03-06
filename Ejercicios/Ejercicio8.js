//Apuestas Carros

let Pilotos;let Montos;let TiposApuestas;let Posicion;let Cuotas;let Identificacion;let Ganador;let Edad;let Min=1;let Max=16;let Numero;let Ganancias;

Pilotos=prompt("Buenas Tardes Bienvenidos Sean Todos A Estafas La Piramide \n Por Favor Ingrese EL Nombre Del Piloto que Desea Apoyar ")
Cuotas=parseFloat(prompt("Por Favor Ingrese El Numero de Cuotas a Pagar El Monto"));
while (Cuotas<1||Cuotas>36) {
  Cuotas=parseFloat(prompt("Por Favor Ingrese El Numero de Cuotas a Pagar El Monto"));
}
TiposApuestas=parseInt(prompt("Como Desea Realizar Su Apuesta Tenemos 2 Opciones \n Ganador de la Carrera Elija Opcion 1 \n O\n Opcion 2 Posicion Exacta En Donde Terminara El Competidor"))
while (TiposApuestas<1||TiposApuestas>2) {
  TiposApuestas=parseInt(prompt("Como Desea Realizar Su Apuesta Tenemos 2 Opciones \n Ganador de la Carrera Elija Opcion 1 \n O\n Opcion 2 Posicion Exacta En Donde Terminara El Competidor"))
}
Montos=parseInt(prompt("Por Favor Ingrese El Monto Deseado Para Apostar  \n Minimo $10000 y Maximo $1000000"))
while (Montos<10000||Montos>1000000) {
  Montos=parseInt(prompt("Por Favor Ingrese El Monto Deseado Para Apostar \n Minimo $10000 y Maximo $1000000"))
}

Edad=parseInt(prompt("Por Favor Digite Su Edad"))
if (Edad >= 18) {
  alert("Usted es mayor de Edad");
  switch (TiposApuestas) {
    case 1:
       Numero=Math.round(Math.random()*(Min-Max)+Max);
       if (Posicion===Numero) {
        Ganancias=Montos*(Cuotas-1)
        console.log("Felicidades Usted Ha Apoyado al Piloto ",Pilotos," Que Quedaria Ganador y El A Quedado ",Numero," Sus Ganancias Son de $",Ganancias)
       }else if (Posicion !=Numero){
        Ganancias=Montos*(Cuotas-1)
        } console.log("Usted Ha Apoyado al Piloto ",Pilotos," Que Quedaria Ganador y El A Quedado ",Numero," A Perdido $",Montos)
      break;
  case 2:
    Posicion=parseInt(prompt("Por Favor Escriba La Posicion Final de Su Piloto ( De a 16)"))
    while (Posicion<1 || Posicion>16) {
    Posicion=parseInt(prompt("Por Favor Escriba La Posicion Final de Su Piloto ( De a 16)"))
}
    Numero=Math.round(Math.random()*(Min-Max)+Max);
    if (Posicion===Numero) {
     Ganancias=Montos*(Cuotas-1)
     alert("Felicidades Usted Ha Apoyado al Piloto ",Pilotos,"Que Quedaria en la Posicion ",Posicion," y El A Quedado ",Numero," Sus Ganancias Son de $",Ganancias)
    }else if(Posicion !=Numero){
      Ganancias=Montos*(Cuotas-1)
      console.log("Usted Ha Apoyado al Piloto ",Pilotos," Que Quedaria Ganador y El A Quedado ",Numero," A Perdido $",Montos)
      break;
  }
}
} else {
  console.log("Usted es menor de Edad No Puede Participar");
}
