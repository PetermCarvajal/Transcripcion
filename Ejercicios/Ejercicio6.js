let Restaurantes;let Menu;let Cantidad;let Costo;let CostoTotal;let Envio=5000;let MenuB;let CantidadM;let CantidadB;let CostoB;let CostoM;
alert("Bienvenido a Rappi")
Restaurantes=parseInt(prompt("De Cual De Nuestros Asociados Desea Comer El Día De Hoy \n Hamburguesas Krosty Elija 1 \n Pizzeria Tutí Elija 2 \n  Chinese Food Elija 3"))
while (Restaurantes<1||Restaurantes>3) {
    Restaurantes=parseInt(prompt("De Cual De Nuestros Asociados Desea Comer El Día De Hoy \n Hamburguesas Krosty Elija 1 \n Pizzeria Tutí Elija 2 \n  Chinese Food Elija 3"))
}
switch (Restaurantes) {
    case 1:
        Menu=parseInt(prompt("Bienvenido A Hamburguesas Krosty Disponemos de Una Variedad de 3  Hamburguesas y 3 Bebidas\n\n Por Favor Elija Una Hamburguesa Nuestras Hamburguesas Son: 1 Baby $13000 Elija 1 \n Hamburguesa Simple $25000 Elija 2 \ Hamburguesa  Doble $50000 Ellija 3"))
        while (Menu<1||Menu>3) {
            Menu=parseInt(prompt("Bienvenido A Hamburguesas Krosty Disponemos de Una Variedad de 3  Hamburguesas y 3 Bebidas\n\n Por Favor Elija Una Hamburguesa Nuestras Hamburguesas Son: 1 Baby $10000 Elija 1 \n Hamburguesa Simple $25000 Elija 2 \ Hamburguesa  Doble $50000 Ellija 3"))
        }
        CantidadM=parseInt(prompt("Cuantos ",Menu," Desea Pedir"))
        
        MenuB=parseInt(prompt("Nuestras Bebidas Son:\n Gaseosa la Traicionera $12000 Elija 1 \n Agua De Grifo $5000 Elija 2\n y la Sorpresa $50000 ELIJA 3"))
        while (MenuB<1||MenuB>3) {
            MenuB=parseInt(prompt("Nuestras Bebidas Son:\n Gaseosa la Traicionera $10000 Elija 1 \n Agua De Grifo $5000 Elija 2\n y la Sorpresa $50000 ELIJA 3"))            
        }                  
        CantidadB=parseInt(prompt("Cuantas ",MenuB," Desea Pedir"))
        //Menu 1
        if (Menu===1 && MenuB===1) {
            CostoM=13000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Baby y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           }else if (Menu===1 && MenuB===2) {
            CostoM=13000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Baby y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        }else if (Menu===1 && MenuB===3) {
            CostoM=13000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("EL Valor de compra de Su Comida  de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Baby y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           }                
        //Menu 2
           if (Menu===2 && MenuB===1) {
            CostoM=25000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ... ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Simple y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           } else if (Menu===2 && MenuB===2) {
            CostoM=25000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Simple y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        } else if (Menu===2 && MenuB===3) {
            CostoM=25000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Simple y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        }               
        //Menu 3
        if (Menu===3 && MenuB===1) {
            CostoM=50000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Doble y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
           break;
           }else  if (Menu===3 && MenuB===2) {
            CostoM=50000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Doble y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        }else if (Menu===3 && MenuB===3) {
            CostoM=50000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("EL Valor de compra de Su Comida de Hamburguesas ... $ ",CostoM," y Sus Bebidas ...  $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Hamburguesas Doble y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
           }           
    break; 
       
        

    case 2:
        Menu=parseInt(prompt("Bienvenido A Pizzeria Tutí Disponemos de Una Variedad de 3  Pizzas y 3 Bebidas\n\n Por Favor Elija Una  Nuestras Pizzas Son: 1 Pizza Baby $50000 Elija 1 \n Pizza Familiar $85000 Elija 2 \ Pizza  Doble $1700000 Ellija 3"))
        while (Menu<1||Menu>3) {
            Menu=parseInt(prompt("Bienvenido A Pizzeria Tutí Disponemos de Una Variedad de 3  Pizzas y 3 Bebidas\n\n Por Favor Elija Una  Nuestras Pizzas Son: 1 Pizza Baby $50000 Elija 1 \n Pizza Familiar $85000 Elija 2 \ Pizza  Doble $1700000 Ellija 3"))
        }
        CantidadM=parseInt(prompt("Cuantos ",Menu," Desea Pedir"))
        
        MenuB=parseInt(prompt("Nuestras Bebidas Son:\n Gaseosa la Traicionera $12000 Elija 1 \n Agua De Grifo $5000 Elija 2\n y la Sorpresa $50000 ELIJA 3"))
        while (MenuB<1||MenuB>3) {
            MenuB=parseInt(prompt("Nuestras Bebidas Son:\n Gaseosa la Traicionera $10000 Elija 1 \n Agua De Grifo $5000 Elija 2\n y la Sorpresa $50000 ELIJA 3"))            
        }                  
        CantidadB=parseInt(prompt("Cuantas ",MenuB," Desea Pedir"))
        //Menu 1
        if (Menu===1 && MenuB===1) {
            CostoM=50000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizzas Baby y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           }
        if (Menu===1 && MenuB===2) {
            CostoM=50000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizzas Baby y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        }
        if (Menu===1 && MenuB===3) {
            CostoM=50000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizzas Baby y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           }
        //Menu 2
           if (Menu===2 && MenuB===1) {
            CostoM=85000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizza Familiar y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           }
        if (Menu===2 && MenuB===2) {
            CostoM=85000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizza Familiar y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        }
        if (Menu===2 && MenuB===3) {
            CostoM=85000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizza Familiar y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        }
        //Menu 3
        if (Menu===3 && MenuB===1) {
            CostoM=170000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizza Doble y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           }
        if (Menu===3 && MenuB===2) {
            CostoM=170000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizza Doble y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
        }
        if (Menu===3 && MenuB===3) {
            CostoM=170000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor de Compra de Sus Pizzas... es de $ ",CostoM," y Sus Bebidas de $ ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Pizza Doble y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
            break;
           } 

        break;
    
    case 3:
        Menu=parseInt(prompt("Bienvenido A Chinese Food Disponemos de Una Variedad de 3 Comidas Tradicionales Chinas y 3 Bebidas\n\n Por Favor Elija Una  Nuestras Comidas Son Son: 1  Baby Porcion $15000 Elija 1 \n Fideos Con Pollo $18000 Elija 2 \n Sushi $20000 Ellija 3"))
        while (Menu<1||Menu>3) {
            Menu=parseInt(prompt("Bienvenido A Chinese Food Disponemos de Una Variedad de 3  Comidas Tradicionales Chinas 3 Bebidas\n\n Por Favor Elija Una  Nuestras Comidas Son Son: 1  Baby Porcion $15000 Elija 1 \n Fideos Con Pollo $18000 Elija 2 \n Sushi $20000 Ellija 3"))
        }
        CantidadM=parseInt(prompt("Cuantos ",Menu," Desea Pedir"))
        
        MenuB=parseInt(prompt("Nuestras Bebidas Son:\n Gaseosa la Traicionera $12000 Elija 1 \n Agua De Grifo $5000 Elija 2\n y la Sorpresa $50000 ELIJA 3"))
        while (MenuB<1||MenuB>3) {
            MenuB=parseInt(prompt("Nuestras Bebidas Son:\n Gaseosa la Traicionera $10000 Elija 1 \n Agua De Grifo $5000 Elija 2\n y la Sorpresa $50000 ELIJA 3"))            
        }                  
        CantidadB=parseInt(prompt("Cuantas ",MenuB," Desea Pedir"))
        //Menu 1
        if (Menu===1 && MenuB===1) {
            CostoM=50000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Baby Porcion y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
           }else if (Menu===1 && MenuB===2) {
            CostoM=50000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Baby Porcion y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
        }else  if (Menu===1 && MenuB===3) {
            CostoM=50000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Baby Porcion y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
           }            
        //Menu 2
           if (Menu===2 && MenuB===1) {
            CostoM=85000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Fideos con Pollo y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
           }else if (Menu===2 && MenuB===2) {
            CostoM=85000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Fideos con Pollo y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
        }else if (Menu===2 && MenuB===3) {
            CostoM=85000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Fideos con Pollo y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
        }  
        //Menu 3
        if (Menu===3 && MenuB===1) {
            CostoM=170000*CantidadM;
            CostoB=12000*CantidadB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Sushi y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
           }else if (Menu===3 && MenuB===2) {
            CostoM=170000*CantidadM;
            CostoB=5000*CantidadB;
            CostoTotal=CostoB+CostoM+5000;
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Sushi y de ",CantidadB," Agua del Grifo El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
        }else if (Menu===3 && MenuB===3) {
            CostoM=170000*CantidadM;
            CostoB=50000*MenuB
            CostoTotal=CostoB+CostoM+5000
            console.log("El Valor De Su Comida Tradicional China es de $ ",CostoM," y de Sus Bebidas es de ",CostoB)
            console.log("Gracias Por Su Pedido de ",CantidadM," Sushi y de ",CantidadB," Gaseosa la Traicionera El Costo Total Envio Incluido es de $ ",CostoTotal)
                break;  
           } 
        break;        
}
