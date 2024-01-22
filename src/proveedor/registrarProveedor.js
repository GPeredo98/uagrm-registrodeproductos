const { Proveedor } = require("./proveedor");

class RegistrarProveedor extends Proveedor{
    async registrarProveedor(repository) {
		try {
			
			const proveedor = {
				id: this.id,
				nombre: this.nombre,
			};
			const result = await repository.registrarProveedor(proveedor) ;
	
			proveedor.id = result.insertId;
	
			return proveedor;
		} catch (error) {
			console.log(error);
		}
	}
}


module.exports = {
    RegistrarProveedor,
}