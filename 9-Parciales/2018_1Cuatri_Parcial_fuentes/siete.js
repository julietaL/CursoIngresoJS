function mostrar()
{

var notas;
var sexo;
var promedio;
var contador=0;
var acumuladordenotas=0;
var notamasbaja;
var sexonotamasbaja;
var notasexom;
var contadornotasm=0;


while (contador<5)
{

contador ++;

notas=prompt("ingrese notas");
notas=parseInt(notas);

	while(isNaN(notas)||notas<0||notas>10)
	{
	notas=prompt("Reingrese notas");
	notas=parseInt(notas);
 

	}
acumuladordenotas=acumuladordenotas+notas;

sexo=prompt("ingrese sexo");

	while (sexo!="f"&& sexo!="m")
	{
	sexo=prompt("Reingrese sexo");

	}

if(contador==1)

{

notamasbaja=notas;
sexonotamasbaja=sexo;
}
else

{

	if(notas<notamasbaja)
	{
		notamasbaja=notas;
		sexonotamasbaja=sexo;
	}
}




 if(notas>= 6 && sexo=="m")

{
contadornotasm++;

}


}

 promedio=acumuladordenotas/contador;

alert(promedio);
alert(notamasbaja);
alert(sexonotamasbaja);
alert("la cantidad de varones con nota mayor a 6 es:"+contadornotasm);

}
