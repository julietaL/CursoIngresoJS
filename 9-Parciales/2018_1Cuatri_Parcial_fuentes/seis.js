function mostrar()
{

 var hora;
 
 hora=prompt("Ingrese Hora");

 switch(hora)

 {
    case "6":
 	case "7":
    case "8":
 	case "9":
    case "10":
    case "11":
 	
 	alert("Es de mañana");
 break;
   
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    
    alert("Es de tarde");
 break;
 
   case "20":
   case "21":
   case "22":
   case "23":	 		
   case "24": 

  alert("a dormir");
 break;

 default:

 alert("reingrese la hora");
 }
 
 }
