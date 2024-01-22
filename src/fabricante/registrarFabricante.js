const { Fabricante } = require("./fabricante");

class RegistrarFabricante extends Fabricante{
    async registrarfabricante(repository) {
        try {
            const fabricante = {
                id: this.id,
                nombre: this.nombre,
            };
            const result = await repository.registrarFabricante(fabricante);
    
            fabricante.id = result.insertId;
    
            return fabricante;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    RegistrarFabricante,
}