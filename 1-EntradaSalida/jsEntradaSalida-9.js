/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

var sueldo;
var porcentaje;	
var importe;


sueldo=document.getElementById('sueldo').value; /*pongo el document para que identifique la caja de donde va a tomar el valor/*
sueldo=parseInt(sueldo); /* hago el paseInt para que tome el valor de adentro del cuadro de la pag web*/
porcentaje=sueldo * (10/100);*/

importe= sueldo + porcentaje;		
document.getElementById('resultado').value=importe; 

//*/tengo que hacer el document para que tome el on clik 
de la pag web y ponga el resultado//


}
