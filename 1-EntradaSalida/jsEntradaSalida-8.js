/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*var numeroDividendo;	
	var numeroDivisor;
	var SacarResto;
	numeroDividendo = document.getElementById('Dividendo').value;	
    numeroDivisor = document.getElementById('Divisor').value;
    SacarResto = document.getElementById('mostrar resto').value;
    parseInt (dividendo);	
    parseInt (divisor);


    SacarResto = dividendo % divisor;
    Alert ("El resto es: " + resto);*/

    
    var dividendo;
	var divisor;
	var resto;
    
	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;
	resto=document.getElementById('mostrarResto');
	
	dividendo=parseInt(dividendo);	
	numeroDivisor=parseInt(divisor);
	
	resto=(dividendo%divisor);
	alert("El resto es "+resto); 


}
  