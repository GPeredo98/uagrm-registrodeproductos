const { Proveedor } = require("./proveedor");

class ListarProveedores extends Proveedor{
    async listarProveedores(repository) {
        return await repository.listarProveedores();
     }
}

module.exports = {
	ListarProveedores
}