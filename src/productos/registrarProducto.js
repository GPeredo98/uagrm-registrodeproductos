const { Producto } = require("./producto");

class RegistrarProducto extends Producto {
	async registrarProducto(productoRepository) {
		try {

			const producto = {
				nombre: this.nombre,
				precio: this.precio,
				nombreExtranjero: this.nombreExtranjero,
				peso: this.peso,
				unidadMedida: this.unidadMedida,
				codigoBarra: this.codigoBarra,
				idAlterno: this.idAlterno,
				fkGrupoProducto: this.fkGrupoProducto,
				fkFabricante: this.fkFabricante,
				fkProveedor: this.fkProveedor,
			};

			const result = await productoRepository.registrarProducto(producto);
	
			producto.id = result.insertId;
	
			return producto;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = {
	RegistrarProducto
}