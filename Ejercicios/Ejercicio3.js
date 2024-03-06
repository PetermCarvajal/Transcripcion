let Tipo;let Clasicos=500000;let Running=800000;let Basketball=1000000;let Cantidad;let Talla; let TotalPagar;let Descuento;let ValorTotal;

Tipo=parseInt(prompt("Bienvenido a Pepemanga Que Tipo de Tennis Desea LLevar \n Digite 1 Para Tennis Clasicos Cuestan $ 500.000 \n Digite 2 Para Tennis de Running Cuestan $ 800.000\n Digite 3 Para Tennis de Basketball Cuestan 1'000.000",0));
if (Tipo <1 || Tipo >3) {
      alert("Por favor Digite Un Numero Valido")
       while (Tipo<1 || Tipo>3){
         Tipo=parseInt(prompt(" Digite 1 Para Tennis Clasicos Cuestan $ 500.000 \n Digite 2 Para Tennis de Running Cuestan $ 800.000\n Digite 3 Para Tennis de Basketball Cuestan 1'000.000"));
         alert("Por favor Digite Un Numero Valido")
       }
    
}
Talla=parseInt(prompt("Por Favor Eliga la Talla\nLas Tallas Disponibles son Desde 35 Hasta 44"));
if (Talla <35 || Talla >44) {
    alert("Por favor Digite Una Talla Valida")
     while (Talla<35 || Talla>44){
       Talla=parseInt(prompt("Por Favor Eliga la Talla,Las Tallas Disponibles son Desde 35 Hasta 44"));
       alert("Por favor Digite Una Talla Valida")
     }
}
Cantidad=parseInt(prompt("Por Favor Ingrese La Cantidad  Maximo 5 Pares Por Compra"));
if (Cantidad <1 || Cantidad >5) {
    alert("Por favor Digite Una Cantidad Valida")
     while (Cantidad<1 || Cantidad>5){
       Cantidad=parseInt(prompt(" Por Favor Ingrese La Cantidad  Maximo 5 Pares Por Compra"));
       alert("Por favor Ingrese Una Cantidad Valida")
     }
}
if(Cantidad<3)
{
    switch (Tipo) {
        case 1:
            TotalPagar=500000*Cantidad;
            console.log("El Total a Pagar  Por Su Compra de Clasicos Por Una Cantidad de ",Cantidad," De la Talla ",Talla,"Es de ",TotalPagar)
            break;
        case 2:
            TotalPagar=800000*Cantidad;
            console.log("El Total a Pagar  Por Su Compra de Running Por Una Cantidad de ",Cantidad," De la Talla ",Talla,"Es de ",TotalPagar)
            break;
        case 3:
            TotalPagar=1000000*Cantidad 
            console.log("El Total a Pagar  Por Su Compra de Basketball Por Una Cantidad de ",Cantidad," De la Talla ",Talla,"Es de ",TotalPagar)
            break;   
    }
}
if (Cantidad=>3) {
    switch (Cantidad) {
        case 3:
            Descuento=500000*Cantidad*0.1;
            TotalPagar=Cantidad*Clasicos-Descuento;
            console.log("El Total a Pagar  Por Su Compra de Clasicos Por Una Cantidad de ",Cantidad," De la Talla ",Talla,"Es de ",TotalPagar)
            break;
        case 4:
            Descuento=800000*Cantidad*0.1;
            TotalPagar=Cantidad*Running-Descuento;
            console.log("El Total a Pagar  Por Su Compra de Running Por Una Cantidad de ",Cantidad," De la Talla ",Talla,"Es de ",TotalPagar)
            break;
        case 5:
            Descuento=1000000*Cantidad*0.1;
            TotalPagar=Cantidad*Basketball-Descuento;
            console.log("El Total a Pagar  Por Su Compra de Basketball Por Una Cantidad de ",Cantidad," De la Talla ",Talla,"Es de ",TotalPagar)
            break;   
    }  
}