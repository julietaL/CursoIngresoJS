
/*En una tienda se ingresan los datos de los cliente (nombre , sexo, estado civil
{soltero, casado,viudo},cantidad de productos e importe total de la compra)
Necesitamos saber:
a- el nombre de la persona que más cantidad de productos compró
b- de los solteros, el  sexo del que más gasto y el que menos gasto.
c-el importe  y nombre de la primer mujer en comprar.
d- el promedio de gasto de los viudos.

*/
function mostrar()
{
		var nombre;
		var sexo;
		var estadocivil;
		var cantidad;
		var bandera=0;
		var importe;
		var nombremascompro;
		var cantidadmayor;
		var importemayor;
		var importemenor;
		var sexomenor;
		var sexomayor;
		var banderasoltero=0;
		var banderamujer=0;
		var importemujer;
		var nombremujer;
		var importeviudo=0;
		var contadorviudo=0;

		while (true)
		{
			nombre=prompt("ingrese nombre o ingrese no para salir");
		
			if(nombre=="no")
		
			{
				break;
			}

			sexo=prompt("ingrese sexo f o m");

			while(sexo!="f"&& sexo!= "m")
			{
				sexo=prompt("ingrese sexo f o m ");				
			}
			estadocivil=prompt("ingrese estado civil soltero, casado o viudo");
			
			while(estadocivil !="soltero" && estadocivil !="casado" && estadocivil != "viudo")

			{
				estadocivil=prompt("ingrese estado civil soltero, casado o viudo");
			}

			cantidad=prompt("ingrese cantidad");
			cantidad=parseInt(cantidad);

			while(isNaN(cantidad)|| cantidad<1)
			{
				cantidad=prompt("ingrese cantidad");
				cantidad=parseInt(cantida);
			}

			importe=prompt("ingrese importe");
			importe=parseInt(importe);
			while(isNaN(importe)|| importe<1)
			{
				importe=prompt("ingrese importe");
				importe=parseInt(importe);
			}	

			if(bandera==0)
			{
				cantidadmayor=cantidad;
				nombremascompro=nombre;
				bandera++;
			}else
			{
				if(cantidad>cantidadmayor)
				{
					cantidadmayor=cantidad;
					nombremascompro=nombre;	
				}
			}
			if(estadocivil=="soltero")
			{
				if(banderasoltero==0)
				{
					importemayor=importe;
					importemenor=importe;
					sexomenor=sexo;
					sexomayor=sexo;
					banderasoltero++;
				}else
				{
					if (importe>importemayor)
					{ 
						importemayor=importe;
						sexomayor=sexo;
					}
					if(importe<importemenor)

					{
						importemenor=importe;
						sexomenor=sexo;
					}

				}

			}
			if (sexo=="f"&& banderamujer==0)
			 {
			 	importemujer=importe;
			 	nombremujer=nombre;
			 	banderamujer++;
			 }
			


			if(estadocivil=="viudo")
			{
				importeviudo=importeviudo + importe;
				contadorviudo++;

			}
		} 
		promedioviudo=importe/contadorviudo;


		document.write("<BR>el nombre de la persona que mas productos llevo es " + nombremascompro);
		document.write("<BR>el sexo del soltero que mas gasto es " + sexomayor + " el sexo de los solteros que menos gasto es " + sexomenor);
		document.write("<BR> el nombre de la primer mujer en comprar es " + nombremujer + " y gasto " + importemujer);
		document.write("<BR> el promedio de gasto de los viudos es " + promedioviudo);	









































}
	/*var nombre;
	var sexo;
	var respuesta;
 	var estadocivil;
 	var cantidaddeproducto;
 	var contador;
 	var importetotal;
 	var banderaeslaprimera;
 	var menosgastosexo;
 	var menosgasto;
 	var banderaprimersoltero;
 	
 respuesta=n;
 contador=0
 

 nombre=prompt("ingrese nombre");
 sexo=prompt("ingrese sexo");
 estadocivil=prompt("ingrese estado civil");
 cantidaddeproducto=prompt("ingrese cant de productos");


 while(respuesta!="n")
 {

 	respuesta=prompt("ingrese n para salir");
 }
 while (cantidad>0() && isNaN (cantidad)
 	while(sexo!="f" &&sexo!="m")

 	sexo=prompt("ingrese sexo");	

  while (estadocivil!="soltero"&&estadocivil!= "casado" && estadocivil!="viudo")
  	estadocivil=prompt("ingrese estado civil");
 
 cantidaddeproducto=prompt("ingrese cant de productos");
 {While (isNaN (importetotal))
if (banderaeslaprimera==si)
{
	banderaeslaprimera="no";
}
}
if(estadocivil=="soltero")
	if(banderadelprimersoltero=="si")
	{
		masgasto=gasto;
		masgastossexo=sexo;
		menosgasto=gasto;*/

	