let LavadoBasico=1;let LavadoPremium=2;let CostoTotal;let Cantidad;let Selección;let PrecioUnd;

Selección=parseInt(prompt(" Bienvenido a Lavatron3000  Por Favor Ingrese 1 Para Lavado Basico $2000 C/u \n O \n 2 Para Lavado Premium $4000 C/u",0));
if (Selección <1 || Selección >2) {
    console.log("Inserte un Valor Valido");
    if (Selección <1 || Selección>2) {
      alert("Por favor Digite Un Numero Valido")
       while (Selección<1 || Selección>2){
         Selección=parseInt(prompt("Ingrese 1 Para Lavado Basico $2000 C/u \n O \n 2 Para Lavado Premium $4000 C/u "));
         alert("Por favor Digite Un Numero Valido")
       }
}

Cantidad=parseInt(prompt("Ingrese la Cantidad de Prendas que Quiere Lavar  (Maximo 20)"));
if (Cantidad <1 ||  Cantidad>20){
        console.log("Ingrese Una Cantidad de Prendas Valida");  
      }
else {
    console.log(Selección)   
}
switch (Selección) {
    case LavadoBasico:
     CostoTotal=Cantidad*2000;
     console.log("El Costo del Lavado  es de $",CostoTotal);      
        break;

    case LavadoPremium:
     CostoTotal=Cantidad*4000;
     console.log("El Costo del Lavado es de $",CostoTotal);  
        break;
}
}