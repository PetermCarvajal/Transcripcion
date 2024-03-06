let ValorMatricula=7000000;let Descuento;let Interes;let PagoCompleto;let Pago2Cuotas;let Pago3Cuotas;let FormaPago=Number;let ValorTotal;let F;
FormaPago=parseInt(prompt("Bienvenido a La Corporación Empresarial Universitaria Alexander Von Humboldt \n Elija La Opcion de Pago \n Pago Completo Elija la Opción 1 \n Pago A 2 Cuotas Elija La Opción 2 \n Pago a 3 Cuotas Elija La Opcion 3 "));
if (FormaPago <1 || FormaPago>3) {
 alert("Por favor Digite Un Numero Valido")
  while (FormaPago<1 || FormaPago>3){
    FormaPago=parseInt(prompt("Elija La Opcion de Pago \n Pago Completo Elija la Opción 1 \n Pago A 2 Cuotas Elija La Opción 2 \n Pago a 3 Cuotas Elija La Opcion 3 "));
    alert("Por favor Digite Un Numero Valido")
  }
}
switch (FormaPago) {
    case (FormaPago =1) :
       if (FormaPago=1){
        Descuento=ValorMatricula*0.005;
        ValorTotal=ValorMatricula-Descuento;
        console.log("El Valor de la Matricula Con Su Descuento del 5% es de $ ",ValorTotal)
        break;
       }
     case (FormaPago=2) :
        if (FormaPago=2){
         Pago2Cuotas=ValorMatricula/2;
         Interes=Pago2Cuotas*0.002; 
         ValorTotal=Pago2Cuotas+Interes;
         console.log("El Valor de su Matricula es de $ ",ValorTotal)
         break;
        }
      case(FormaPago=3):
       if (FormaPago=3) {
        Pago3Cuotas=ValorMatricula/3;
         Interes=Pago3Cuotas*0.003; 
         ValorTotal=Pago3Cuotas+Interes;
         ValorTotal=ValorTotal+Interes;
        ValorTotal=Math.round(ValorTotal)
         console.log("Valor de Su Matricula es de $ ",ValorTotal)
         break;
       }
  }