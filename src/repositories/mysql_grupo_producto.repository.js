const { getConnection } = require('../database');
const { GrupoProductoRepository } = require('./grupo_producto.repository');

class MySQLGrupoProductoRepository extends GrupoProductoRepository {
    async registrarGrupoProducto(grupo) {
        const conn = await getConnection();
        const result = await conn.query('INSERT INTO grupoProductos SET ?', grupo);
        return result;
    }

    async listarGrupoProductos() {
        const conn = await getConnection();
        const results = await conn.query("SELECT * FROM grupoProductos ORDER BY id DESC");
        return results;
    }
}

module.exports = {
    MySQLGrupoProductoRepository,
};