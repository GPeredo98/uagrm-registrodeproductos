const { Producto } = require("./producto");

class ListarProductos extends Producto {
    async listarProductos(repository) {
        return await repository.listarProductos();
     }
}
module.exports = {
	ListarProductos
}