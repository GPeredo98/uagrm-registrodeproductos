const { Fabricante } = require("./fabricante");

class ListarFabricantes extends Fabricante{
	async listarFabricantes(repository) {
        return await repository.listarFabricantes();
    }
}

module.exports = {
    ListarFabricantes,
}