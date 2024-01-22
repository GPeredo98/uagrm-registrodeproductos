const { getConnection } = require('../database');
const { FabricanteRepository } = require('./fabricante.repository');

class MySQLFabricanteRepository extends FabricanteRepository {
    async registrarFabricante(fabricante) {
        const conn = await getConnection();
        const result = await conn.query('INSERT INTO fabricantes SET ?', fabricante);
        return result;
    }
    async listarFabricantes(){
        const conn = await getConnection();
        const results = await conn.query("SELECT * FROM fabricantes ORDER BY id DESC");
        return results;
    }
}

module.exports = {
    MySQLFabricanteRepository,
};