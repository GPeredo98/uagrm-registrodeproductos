const { GrupoProducto } = require("./grupoProducto");

class RegistrarGrupoProducto extends GrupoProducto {
    async registrarGrupoProducto(repository) {
        try {
            const grupoProducto = {
                id: this.id,
                nombre: this.nombre,
            };
            const result = await repository.registrarGrupoProducto(grupoProducto);
    
            grupoProducto.id = result.insertId;
    
            return grupoProducto;
        } catch (error) {
            console.log(error);
        }
	}
}

module.exports = {
	RegistrarGrupoProducto
}