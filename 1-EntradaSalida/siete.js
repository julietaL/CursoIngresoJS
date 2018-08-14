function mostrar()
{
	 var ancho;
	 var alto;
	 var peso;
	 var nombre;
	 var contador=0;
	 var maspesado;
	 var masalto;
	 var menorancho;
	 var contadorentre300y600=0; 

	 while(contador<5)
	 {
	 	contador++;
	 	nombre=prompt("ingrese nombre");

	 	ancho=prompt("ingrese ancho");
	 	ancho=parseInt(ancho);
	 	
	 	while(isNaN(ancho)|| ancho<0 || ancho>10)
	 	{
	 		ancho=prompt("ingrese ancho");
	 		ancho=parseInt(ancho);
	 	}
	 	alto=prompt("ingrese alto");
	 	alto=parseInt(alto);

	 	while(isNaN(alto)|| alto<0 || alto>10)
	 	{
	 		alto=prompt("ingrese alto");
	 	 	alto=parseInt(alto);
	 	}
	 	peso=prompt("ingrese peso");
	 	peso=parseInt(peso);

	 	 while(isNaN(peso)|| peso<1 || peso>1000)
	 	 {
	 	 	peso=prompt("ingrese peso");
	 		peso=parseInt(peso);
	 	 }

	 	 if(contador==1)
	 	 {
	 	 	maspesado=peso;
	 	 	masalto=alto;
	 	 	menorancho=ancho;

	 	 }else
	 	 {
	 	 	if(peso>maspesado)
	 	 	{
	 	 		maspesado=peso;

	 	 	}
	 	 	if ( alto>masalto)
	 	 	{
	 	 		masalto=alto;
	 	 	}
	 	 	if(ancho<menorancho) 
	 	 	{
	 	 		menorancho=ancho;
	 	 	}

	 	 }

	 	 if(peso>=300 && peso<=600)
	 	 {
	 	 	contadorentre300y600++;
	 	 }	







	 }
	 	alert("el peso mas pesado es : " + maspesado + " la altura mas alta es : " + masalto +
	 	 " el menor ancho es : " + menorancho + " y la cantidad entre 300 y 600 es : " + contadorentre300y600);




}
	
	



















































	/*var alto;
	var ancho;
	var peso;
	var nombre;
	var contador;	
	var pesomaspesado;
	var alturamasalta;
	var menorancho;
	var contadorentre300y600;
	var pesoentre300y600;
	
	contador=0;
	contadorentre300y600=0;
	
	while(contador<3)
{

	contador++;
	contadorentre300y600++;

	alto=prompt("ingrese alto");
	alto=parseInt(alto);
	 while(isNaN(alto)|| alto>10)
	 {
		alto=prompt("Reingrese alto");
		alto=parseInt(alto);


	 }

	 ancho=prompt("ingrese ancho");
	 ancho=parseInt(ancho);
	 while(isNaN(ancho)|| ancho>10)

	 {
	 	ancho=prompt("Reingrese ancho");
	 	ancho=parseInt(ancho);

	 }
		peso=prompt("ingrese peso");
		peso=parseInt(peso);
		while(isNaN(peso) || peso <0 ||peso >1000)	
	{
		peso=prompt("reingrese peso");
		peso=parseInt(peso);
	}

	if( contador==1)
	{
		pesomaspesado=peso;
		alturamasalta=alto;
		
	}

	else
	 { 
	 	if(peso>pesomaspesado)		
	 	
	 	{
	 		pesomaspesado=peso;
	 	}
	 	if( alto>alturamasalta)
	 	{
	 		alturamasalta=alto;
	 	}
		
		*/
		
		
		

	

		
	
















	/*var nombre;
	var ancho;
	var alto;	
	var peso;
	var pesomaspesado;
	var alturamasalta;
	var elmenorancho;
	var contador300e600;
	var contador;

	contador=0;
	contador300e600=0;
	
	while(contador<5)

	nombre=prompt("ingrese nombre");
	ancho =prompt("ingrese ancho");
	alto  =prompt("ingrese alto");
	peso  =prompt("ingrese peso");

	ancho=parseInt(ancho);
	alto=paseInt(alto);

while (ancho<0 || ancho >10) //while por largo y while con peso validar todo lo que esta afuera debe esta adentro del while//

{    ancho=parseInt(ancho);
	alto=paseInt(alto);
    
	ancho =prompt("ingrese ancho");
	alto  =prompt("ingrese alto");
}	

if(contador==1)
{
masalto=alto;
maspesado=peso;
menorancho=ancho;

}else
{
	if(alto>masalto)


if (alto>masalto)

 {
if(peso>)*/


