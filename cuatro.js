/*(IF)Pedir tres números e informar cual es el mayor  y el menor de los mismos.*/

function mostrar()
{
	
	 var numeroUno;
	 var numeroDos;
	 var numeroTres;
	 var mayor;	
	 var menor;


	 numeroUno=prompt("ingrese un numero");
	 numeroUno=parseInt(numeroUno);

	 numeroDos=prompt("ingrese un numero");
	 numeroDos=parseInt(numeroDos);
	
	 numeroTres=prompt("ingrese un numero");
	 numeroTres=parseInt(numeroTres);
	
	
		if(numeroUno > numeroDos && numeroUno > numeroTres)	
		{
			mayor=numeroUno;

		}else
		
		{
				if(numeroDos > numeroUno && numeroDos > numeroTres)	
		
		
		{
			mayor=numeroDos;	

		 }


		 else
		 {
		 	mayor= numeroTres;
 		 }
		 
		