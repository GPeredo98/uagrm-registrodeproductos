class Producto {

	id;
	nombre;
	precio;
	nombreExtranjero;
	peso;
	unidadMedida;
	codigoBarra;
	idAlterno;
	fkFabricante;
	fkProveedor;
	fkGrupoProducto;

	constructor(
		nombre,
		precio,
		nombreExtranjero,
		peso,
		unidadMedida,
		codigoBarra,
		idAlterno,
		fkFabricante,
		fkProveedor,
		fkGrupoProducto,
	) {
		this.nombre = nombre;
		this.precio = precio;
		this.nombreExtranjero = nombreExtranjero;
		this.peso = peso;
		this.unidadMedida = unidadMedida;
		this.codigoBarra = codigoBarra;
		this.idAlterno = idAlterno;
		this.fkFabricante = fkFabricante;
		this.fkProveedor = fkProveedor;
		this.fkGrupoProducto = fkGrupoProducto;
	}

	obtenerNombre() {
		console.log(this.nombre);
	}
}

module.exports = {
	Producto
}