
let Total;let General;let Preferencial;let VIP;let CantidadBoletas;let LocalidadDeseada;let Impuestos=Total*0.1;let Pago;let SumaPago;let Promociones; 

Localidades=parseInt(prompt("Buenos Dias Bienvenido al Concierto de Eminnem Que Puesto Desea Adquirir Tenemos 3 Tipos Diferentes \n Para Un Puesto General Por un Costo de $ 50000 Ingrese 1\n Para un Puesto Preferencial Por Un Costo de $150000 Ingrese 2\n Para Un Puesto VIP Por Un Costo de $ 300000 Ingrese 3"))
while (LocalidadDeseada<1 || LocalidadDeseada>3) {
  Localidades=parseInt(prompt("Buenos Dias Bienvenido al Concierto de Eminnem Que Puesto Desea Adquirir Tenemos 3 Tipos Diferentes \n Para Un Puesto General Por un Costo de $ 50000 Ingrese 1\n Para un Puesto Preferencial Por Un Costo de $150000 Ingrese 2\n Para Un Puesto VIP Por Un Costo de $ 300000 Ingrese 3"))
}

CantidadBoletas=parseInt(prompt("Cuantas Boletas Desea Comprar Maximo 5 Boletas Por Compra"))
while (CantidadBoletas<1 || CantidadBoletas>5) {
  CantidadBoletas=parseInt(prompt("Cuantas Boletas Desea Comprar Maximo 5  Boletas Por Compra "))
}

Pago=parseInt(prompt("Como Desea Pagar Sus Boletas \n Ingrese 1 Para Pagarlos Por Medio de Efectivo o \n Para Pagarlos Por Medio de Tarjeta de Credito Ingrese 2"))
while (Pago<1||Pago>3) {
  Pago=parseInt(prompt("Como Desea Pagar Sus Boletas \n Ingrese 1 Para Pagarlos Por Medio de Efectivo o \n Para Pagarlos Por Medio de Tarjeta de Credito Ingrese 2")) 
}
switch (Pago) {
  case 1:
    
  if (Localidades=3) {
    Impuestos=300000*CantidadBoletas*0.1;
    Total=300000*CantidadBoletas+Impuestos
    console.log("El Ticket es: \n Tipo de Boleta: VIP \n Forma de Pago Efectivo \n Cantidades de Boletas: $",CantidadBoletas," \n Cargo Por Servicio Por Boleta: $5000 \n Impuestos  es de $",Impuestos," \n Descuentos : No Aplica  \n Promociones: No Aplica \n Total A Pagar $",Total)  
  }else if (Localidades=1) {
    Impuestos= 50000*CantidadBoletas*0.1;
    Descuento=CantidadBoletas*50000*0.01;
    SumaPago=CantidadBoletas*50000;
    Total= SumaPago+Impuestos-Descuento
    console.log("El Ticket es: \n Tipo de Boleta: General \n Forma de Pago Efectivo \n Cantidades de Boletas: $",CantidadBoletas," \n Cargo Por Servicio Por Boleta: $5000 \n Impuestos  es de $",Impuestos," \n Descuentos : del 1% ",Descuento," \n Promociones: 0% \n Total A Pagar $",Total)
  }else if (Localidades=2) {
    Impuestos= 150000*CantidadBoletas*0.1;
    Promociones=CantidadBoletas*150000*0.05
    Descuento=CantidadBoletas*150000*0.01;
    SumaPago=CantidadBoletas*150000;
    Total= SumaPago+Impuestos-Descuento-Promociones;
    console.log("El Ticket es: \n Tipo de Boleta: Preferencial \n Forma de Pago Efectivo \n Cantidades de Boletas: $",CantidadBoletas," \n Cargo Por Servicio Por Boleta: $5000 \n Impuestos  es de $",Impuestos," \n Descuentos : del 1% ",Descuento," \n Promociones:5% ",Promociones," \n Total A Pagar $",Total)
  } 
  break;

  case 2:

  if (Localidades=3) {
    Impuestos=300000*CantidadBoletas*0.1;
    Total=300000*CantidadBoletas+Impuestos
    console.log("El Ticket es: \n Tipo de Boleta: VIP \n Forma de Pago Tarjeta de Credito \n Cantidades de Boletas: $",CantidadBoletas," \n Cargo Por Servicio Por Boleta: $5000 \n Impuestos  es de $",Impuestos," \n Descuentos : No Aplica  \n Promociones: No Aplica \n Total A Pagar $",Total)    
  }else  if (Localidades=1) {
    Impuestos= 50000*CantidadBoletas*0.1;
    Descuento=CantidadBoletas*50000*0.01;
    SumaPago=CantidadBoletas*50000;
    Total= SumaPago+Impuestos-Descuento
    console.log("El Ticket es: \n Tipo de Boleta: General \n Forma de Pago Tarjeta de Credito \n Cantidades de Boletas: $",CantidadBoletas," \n Cargo Por Servicio Por Boleta: $5000 \n Impuestos  es de $",Impuestos," \n Descuentos : del 1% ",Descuento," \n Promociones: 0% \n Total A Pagar $",Total) 
  }else if (Localidades=2) {
    Impuestos= 150000*CantidadBoletas*0.1;
    Promociones=CantidadBoletas*150000*0.05
    Descuento=CantidadBoletas*150000*0.01;
    SumaPago=CantidadBoletas*150000;
    Total= SumaPago+Impuestos-Descuento-Promociones;
    console.log("El Ticket es: \n Tipo de Boleta: Preferencial \n Forma de Pago Tarjeta de Credito \n Cantidades de Boletas: $",CantidadBoletas," \n Cargo Por Servicio Por Boleta: $5000 \n Impuestos  es de $",Impuestos," \n Descuentos : del 1%" ,Descuento," \n Promociones:5% ",Promociones," \n Total A Pagar $",Total) 
  }
    break;
}