let categorias;let Bestsellers;let literatura;let Academicos;let Titulo;let Cantidad;let CostoTotal;let Descuento;let Costo;
alert("Bienvenido a la Biblioteca Pública")
categorias=parseInt(prompt("Ingrese el La Categoria que Desea Retirar  \n Tenemos Las Siguientes Categorias \n Bestsellers Ingrese 1 \n Literatura Ingrese 2 \n Academicos Ingrese 3"))
while (categorias<1 || categorias>3) {
    categorias=parseInt(prompt("Ingrese el La Categoria que Desa Retirar \n Tenemos Las Siguientes Categorias \n Bestsellers Ingrese 1 \n Literatura Ingrese 2 \n Academicos Ingrese 3"))
}
CantidadL=parseInt(prompt("Ingrese la Cantidad de Libros Que Desea Retirar"))
while(CantidadL<1 || Cantidad>5){
  Cantidad=parseInt(prompt("Ingrese la Cantidad de Libros que Dese Retirar Maximo 5"))
}

Titulo=prompt("Ingrese el Nombre del Libro Que Desea Retirar")

Cantidad=parseInt(prompt("Ingrese la Cantidad de  Dias  Que Sea LLevarse Los Libros Maximo 30 Días"))
while(Cantidad<1 || Cantidad>30){
  Cantidad=parseInt(prompt("Ingrese la Cantidad de  Dias  Que Sea LLevarse Los Libros Maximo 30 Días"))
}

if(Cantidad<10){
    switch (categorias) {
        case 1:
        CostoTotal=CantidadL*Cantidad*500
          console.log("Gracias Por Su Retiro de ",Cantidad," Libros Durante ",CantidadL,"Dias Disfrute Los Libros Bestsellers Su Costo Total es de ",CostoTotal)
          break;
      
        case 2:
            CostoTotal=CantidadL*Cantidad*100
          console.log("Gracias Por Su Retiro de ",Cantidad," Libros Durante ",CantidadL,"Dias Disfrute Los Libros de Literatura Su Costo Total es de ",CostoTotal)
          break;
        
        case 3:
          console.log("Gracias Por Su Retiro de ",Cantidad,"Libros  Academicos")
          break;
      }
}

if (Cantidad>=10) {
    switch (categorias) {
        case 1:
         Costo=500*Cantidad*CantidadL;
         Descuento=Costo*0.1;
         CostoTotal=Costo-Descuento;
         console.log("Gracias Por Su Retiro de ",Cantidad," Libros Durante ",CantidadL,"Dias Disfrute Los Libros Bestsellers Su Costo Total es de ",CostoTotal)
          break;
      
        case 2:
        Costo=100*Cantidad*CantidadL;
         Descuento=Costo*0.1;
         CostoTotal=Costo-Descuento;
         console.log("Gracias Por Su Retiro de ",Cantidad," Libros Durante ",CantidadL,"Dias Disfrute Los Libros de Literatura Su Costo Total es de ",CostoTotal)
          break;
        
        case 3:
          console.log("Gracias Por Su Retiro de ",Cantidad,"Libros  Academicos Por ",CantidadL,"Dias")
          break;
      }
}