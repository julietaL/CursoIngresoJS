/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
var edad;
var  nombre;
nombre=document.getElementById("elNombre").value;
edad=document.getElementById("laEdad").value;
alert(" Usted se llama "+nombre+ " y tiene "+edad+" años.");

/* var: define variables xj nombre y edad*/
}

/* ID: define como se va a llamar*/
/* el signo + concatena. entre las comillas de inicio y finalizacion se debe dejar espaciom sino va a aparecer la info sin espacio!*/