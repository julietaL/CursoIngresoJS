	/*Enero 31 Marzo 31 Abril 30 Mayo 31 Junio 30 Julio 31 Agosto 31 
	Septiembre 30 Octubre 31 Noviembre 30 Diciembre 31*/
	function mostrar()
{
			
	var mesesdelaño;		
	var mensaje
	
	mesesdelaño=prompt("ingrese un mes");
	switch(mesesdelaño)
	
	{
		case "enero":
		case "marzo":
		case "mayo":
		case "julio":
		case "agosto":
		case "octubre":
		case "diciembre":

		mensaje=("este mese tiene 31 días");
		 break;
		
		 case "abril":
		 case "junio":
		 case "septiembre":
		 case "noviembre":

		 mensaje=("este mes tiene 30 días");

		 break;

		 case "febrero":
		 mensaje=("este mes es febrero");

		 break;


		 
	}

			alert(mensaje);






/*alert("comentar esta linea 5");*/
}

