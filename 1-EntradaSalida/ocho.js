/*Realizar un algoritmo que pide el ingreso de varias 
series televisivas, de las cuales se pide el título, 
la cantidad de capítulos (más de 0) y el tipo
 (‘d’ = drama, ‘t’ = triller, ‘c’ = comedia y ‘o’ = otras). Se pide 
informar:
a- la cantidad de series con capítulos pares.
b- el nombre de la que tiene más capítulos.
c- el tipo de la que tiene menos capítulos.
d- el promedio de capítulos entre todas las ingresadas

*/

function mostrar()

{
	var titulo;
	var cantidaddecapitulos;
	var tipo;
	var contador=0;	
	var contadorpar=0;
	var cantidadmayordecap;
	var titulomascapitulos;
	var cantidarmenordecap;
	var tipomenor;
	var sumacapitulos=0;
	
	while(true)
	{
		titulo=prompt("ingrese titulo (ingrese no para terminar)");
		if(titulo=="no")
		{
			break;
		}
		contador++;
		
		cantidaddecapitulos=prompt("ingrese cantidad de capitulos");	
		cantidaddecapitulos=parseInt(cantidaddecapitulos);

		while(isNaN(cantidaddecapitulos) || cantidaddecapitulos <1)
		{
			cantidaddecapitulos=prompt("ingrese cantidad de capitulos");	
		 	cantidaddecapitulos=parseInt(cantidaddecapitulos);
		} 
		tipo=prompt("ingrese tipo (‘d’ = drama, ‘t’ = triller, ‘c’ = comedia y ‘o’ = otras)");


		while(tipo != "d" && tipo != "t" && tipo != "c" && tipo != "o")
		{
			tipo=prompt("ingrese tipo (‘d’ = drama, ‘t’ = triller, ‘c’ = comedia y ‘o’ = otras)");		
		}
		if(cantidaddecapitulos%2==0)
		{
			contadorpar++;
		}
		if (contador==1)
		{
			cantidadmayordecap=cantidaddecapitulos;
			titulomascapitulos=titulo;
			cantidarmenordecap=cantidaddecapitulos;
			tipomenor=tipo;
			
		}else 
		{
			if(cantidaddecapitulos>cantidadmayordecap)
			{
				cantidadmayordecap=cantidaddecapitulos;
				titulomascapitulos=titulo;

			} 

			if(cantidaddecapitulos<cantidarmenordecap)
			{
				cantidarmenordecap=cantidaddecapitulos;
				tipomenor=tipo;
			}
		}  
		sumacapitulos=sumacapitulos+cantidaddecapitulos;
	}	

		promedio=sumacapitulos/contador;

	


	



	alert("cantidad de series con capitulos par es de : " + contadorpar + " el nombre de la que tiene mas capitulos "
	+ titulomascapitulos + " el tipo de las que tiene menos capitulos es " + tipomenor + " el promedio de capitulos es " + promedio);	
	
}
