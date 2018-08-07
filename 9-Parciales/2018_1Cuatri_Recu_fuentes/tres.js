function mostrar()
{

var precio;
var descuento;
var iva;
var preciodeldescuento;
var preciocondescuento;
var precioconiva;
var elPrecioFinal;

precio=prompt("ingrese precio");
precio=parseInt(precio);

descuento=prompt("ingrese descuento");
descuento=parseInt(descuento);



preciodeldescuento=(precio*descuento)/100;
preciocondescuento=(precio-preciodeldescuento); 
precioconiva=(preciocondescuento * 21)/100 + preciocondescuento;

document.getElementById('elPrecioFinal').value=precioconiva;

alert("el precio del descuento es de :" + preciodeldescuento + "el precio con el descuento es de : " + preciocondescuento + "el precio con iva es de : "+ precioconiva);



}
