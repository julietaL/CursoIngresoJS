function mostrar()

/*  

*/

{
	var estaciondelaño;
	var temperatura;
	var mensaje;


	estaciondelaño=prompt("ingresar estacion del año");
	temperatura=prompt("ingrese temperatura");
  	
  	temperatura=parseInt(temperatura);

  	switch(estaciondelaño)

  	{
  		
  		
  		case"otoño":
  		
  		if (temperatura==15)

  		{
  			mensaje="esta lindo";

		} else if (temperatura<15)
		  		{
		  			mensaje="se vino el frio";
				}
				else if(temperatura > 15 && temperatura < 21)

					{
						mensaje="esta bueno";
					}

					if(temperatura >21)
					{
						mensaje="mucho calor para el otoño";
					}
		break;
  		
  		case"invierno":
  		if(temperatura > 1 && temperatura < 5)	

  		{
  			mensaje="que fresquete";
  		}
  		break;
  		
  		case"primavera":
  		case "verano":
  		
  		if(temperatura>32)
  		{
  			mensaje="es un horno";
  		}	

  		 if ( temperatura>20 && temperatura<32)
  		 {
  		 		mensaje="que calorcito";
  		 }
  		break;

		}



  	alert(mensaje);


	
}
