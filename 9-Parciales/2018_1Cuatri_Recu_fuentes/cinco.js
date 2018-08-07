function mostrar()
{


var diasdelasemana;
 
diasdelasemana=prompt("ingrese dia de la semana");
 

 switch(diasdelasemana)

 {

case "sabado":
case "domingo":

alert("buen finde");
 
 break;

case "lunes":
case "martes":
case "miercoles":
case "jueves":
case "viernes":

alert("a trabajar");
 
 break;

 alert("no es un dia de la semana");
 default:
 alert("no es un dia de la semana");

 }


}
