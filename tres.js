function mostrar()

//Pedir por prompt el importe del producto, la cantidad y el nombre,// 
//mostrar un solo mensaje con el siguiente texto ://
 //“compró la cantidad xx del producto xx , a un precio de xx,// 
 //pagando el precio de xx con iva incluido”.//

{
	var producto;
	var cantidad;
	var nonbre;
	var importe;
 	var importetotal;
 	var importeconiva;
 	var preciodeventa;

 	producto=prompt("Ingrese un producto");	
 	cantidad=prompt("Ingrese cantidad");
 	nombre=prompt("Ingrese el nombre");
 	importe=prompt("Ingrese el importe");	
 	
 	importetotal=(cantidad*importe);
 	importeconiva=(importetotal*0,21);
 	preciodeventa=importeconiva + importetotal;

 	alert("compró la cantidad" + cantidad + " del producto "+ "producto" +  ", a un precio de" + importetotal + " pagando el precio de " + preciodeventa + " con iva incluido ");
	
}
