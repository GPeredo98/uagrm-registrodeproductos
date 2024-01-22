const { GrupoProducto } = require("./grupoProducto");

class ListarGrupoProductos extends GrupoProducto {
    
    async listarGrupoProductos(repository) {
        return await repository.listarGrupoProductos();
     }
}

module.exports = {
	ListarGrupoProductos
}