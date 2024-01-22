const { ProductoRepository } = require('./product.repository');
const { getConnection } = require('../database');

class MySQLProductoRepository extends ProductoRepository {
    async registrarProducto(producto) {
        const conn = await getConnection();
        const result = await conn.query('INSERT INTO productos SET ?', producto);
        return result;
    }

    async listarProductos() {
        const conn = await getConnection();
        const results = await conn.query("SELECT * FROM productos ORDER BY id DESC");
        return results;
    }
}

module.exports = {
    MySQLProductoRepository,
};