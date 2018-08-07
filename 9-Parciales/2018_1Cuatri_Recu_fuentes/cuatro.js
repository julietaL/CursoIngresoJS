function mostrar()

{

var numerouno;
var numerodos;
var iguales;			
var division;
var suma;
var resultado;

numerouno=prompt("ingrese un numero");
numerouno=parseInt(numerouno);

numerodos=prompt("ingrese otro numero");
numerodos=parseInt(numerodos);

iguales=numerouno==numerodos;

if (iguales) 

{

alert(numerouno+""+numerodos);

}

division=numerouno/numerodos;

if(numerouno>numerodos)

{
alert("el resultado de la division es : " + division);
		
}
suma=numerouno+numerodos;
if(numerouno<numerodos)

{
	alert ("el resultado de la suma es : " + suma);
}

 resultado=division<50 || suma <50;
 alert("el resultado es menor a 50");
}

