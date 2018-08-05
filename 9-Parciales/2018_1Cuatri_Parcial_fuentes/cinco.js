function mostrar()
{

var planetas;

planetas=prompt("ingrese planetas");
switch(planetas)
{
case "mercurio":
case "venus":

alert("aca hace mas calor");
break;

case "tierra":

alert("aca vivimos");
break;

case "marte":
case "jupiter":
case"saturno":
case"urano":
case"neptuno":
case "pluto":
alert("aca hace mas frio");

default: 
alert("reingrese un planeta");
}


}
