// Escobas

let modelo;let materiales;let opciones;let cantidad;let total;
alert("Buenos Dias y Bienvenidos Escobas el Milagro")
modelo=parseInt(prompt("Que Modelo de Escoba Quiere Tenemos 3 Opciones \n Escobas Duras Ingrese 1\n Escobas Suaves Ingrese 2 \n Cepillos Ingrese 3"))
while (modelo<1||modelo>3) {
  modelo=parseInt(prompt("Que Modelo de Escoba Quiere Tenemos 3 Opciones \n Escobas Duras Ingrese 1\n Escobas Suaves Ingrese 2 \n Cepillos Ingrese 3"))
}
materiales=parseInt(prompt("Que Material Quiere en Su Escoba\n Ingrese 1 Para Sintetica \n   Ingrese 2 Para Natural"))
while (materiales<1||materiales>2) {
  materiales=parseInt(prompt("Que Material Quiere en Su Escoba\n Ingrese 1 Para Sintetica \n   Ingrese 2 Para Natural")) 
}
opciones=parseInt(prompt("Desea Escoger de Forma Opcional un Gancho en la Punta por un costo adicionalde $500 Ingrese el 1\n o \n un Mango Largo por un costo adicional de $2000 Ingrese el 2 \n o \n Ninguno de los Anteriores Ingrese el 3"))
while (opciones<1 || opciones>3) {
  opciones=parseInt(prompt("Desea Escoger de Forma Opcional un Gancho en la Punta por un costo adicionalde $500 Ingrese el 1\n o \n un Mango Largo por un costo adicional de $2000 Ingrese el 2 \n o \n Ninguno de los Anteriores Ingrese el 3"))
}
cantidad=parseInt(prompt("Cuantas Escobas Desea Comprar Maximo 30"))
while (cantidad<3 || cantidad>30) {
  cantidad=parseInt(prompt("Cuantas Escobas Desea Comprar Maximo 30"))
}
console.log("Opciones",opciones)
// Sinteticas 

if (opciones===3) {
 if (materiales=1) {
  switch (modelo) {
    case 1:
      total=cantidad*8000;
      alert("Sus "+cantidad+" Escobas Duras Sinteticas Valen $"+total)
      break;
  
    case 2:
      total=cantidad*6000;
      alert("Sus "+cantidad+" Escobas Suaves Sinteticas Valen $"+total)
      break;

      case 3:
        total=cantidad*12000;
      alert("Sus "+cantidad+" Cepillos Sinteticas Valen $"+total)
     break;
  }
 }
}else if (opciones===3) {
  if (materiales=2) {
   switch (modelo) {
     case 1:
       total=cantidad*10000;
       alert("Sus "+cantidad+" Escobas Duras Naturales Valen $"+total)
       break;
   
     case 2:
       total=cantidad*8000;
       alert("Sus "+cantidad+" Escobas Suaves Naturales Valen $"+total)
       break;
 
       case 3:
         total=cantidad*15000;
       alert("Sus "+cantidad+" Cepillos Naturales Valen $"+total)
       break;
   }
  }
 }
//Naturales

 // con  Mango largo
 if (opciones===2) {
  if (materiales=1) {
   switch (modelo) {
     case 1:
      costoMango=cantidad*500;
       total=cantidad*8000+costoMango;
       alert("Sus "+cantidad+" Escobas Duras Sinteticas Con Mango Largo Valen $"+total)
       break;
   
     case 2:
      costoMango=cantidad*500;
       total=cantidad*6000+costoMango;
       alert("Sus "+cantidad+" Escobas Suaves Sinteticas Con Mango Largo Valen $"+total)
       break;
 
       case 3:
        costoMango=cantidad*500;
         total=cantidad*12000+costoMango;
       alert("Sus "+cantidad+" Cepillos Sinteticas Con Mango Largo Valen $"+total)
       break;
   }
  }
 }else if (opciones===2) {
  if (materiales=2) {
   switch (modelo) {
     case 1:
       costoMango=cantidad*500;
       total=cantidad*10000+costoMango;
       alert("Sus "+cantidad+" Escobas Duras Naturales Con Mango Largo Valen $"+total)
       break;
   
     case 2:
       costoMango=cantidad*500;
       total=cantidad*8000+costoMango;
       alert("Sus "+cantidad+" Escobas Suaves Naturales Con Mango Largo Valen $"+total)
       break;
 
       case 3:
         costoMango=cantidad*500;
         total=cantidad*15000+costoMango;
       alert("Sus "+cantidad+" Cepillos Naturales Con Mango Largo Valen $"+total)
       break;
   }
  }
 }
 
  // Con Gancho
  if (opciones===1) {
   if (materiales=1) {
    switch (modelo) {
      case 1:
        costoGancho=cantidad*500
        total=cantidad*10000+costoGancho;
        alert("Sus "+cantidad+" Escobas Duras Sinteticas Con Gancho en la Punta Valen $"+total)
        break;
    
      case 2:
        costoGancho=cantidad*500
        total=cantidad*8000+costoGancho;
        alert("Sus "+cantidad+" Escobas Suaves Sinteticas Con Gancho en la Punta Valen $"+total)
        break;
  
        case 3:
          costoGancho=cantidad*500
          total=cantidad*15000+costoGancho;
        alert("Sus "+cantidad+" Cepillos Sinteticas Con Gancho en la Punta Valen $"+total)
        break;
    }
   }
  }else if (opciones===1) {
    if (materiales=2) {
     switch (modelo) {
       case 1:
        costoGancho=cantidad*500
         total=cantidad*10000+costoGancho;
         alert("Sus "+cantidad+" Escobas Duras Naturales Con Gancho en la Punta Valen $"+total)
         break;
     
       case 2:
        costoGancho=cantidad*500
         total=cantidad*8000+costoGancho;
         alert("Sus "+cantidad+" Escobas Suaves Naturales Con Gancho en la Punta Valen $"+total)
         break;
   
         case 3:
          costoGancho=cantidad*500
           total=cantidad*15000+costoGancho;
         alert("Sus "+cantidad+" Cepillos Naturales Valen Con Gancho en la Punta Valen $"+total)
         break;
     }
    }
   } 
  