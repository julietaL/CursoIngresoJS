function mostrar()
{

var numerouno;
var numerodos;
var resta;
var suma;
numerouno=prompt("ingrese numero");
numerouno=parseInt(numerouno);

numerodos=prompt("ingrese otro numero");
numerodos=parseInt(numerodos);

if(numerouno==numerodos)
{
alert(numerouno+""+numerodos);
}

else if(numerouno>numerodos)
{
	resta=numerouno-numerodos;

alert(resta)
}

if (numerouno<numerodos)

	{
suma=numerouno+numerodos;
alert(suma)
}
if(suma>10)
{

	alert("el resultado es"+ suma + "Es mayor a 10");
}
}


