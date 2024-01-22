const { ProveedorRepository } = require('./proveedor.repository');
const { getConnection } = require('../database');

class MySQLProveedorRepository extends ProveedorRepository {
    async registrarProveedor(proveedor) {
        const conn = await getConnection();
        const result = await conn.query('INSERT INTO proveedores SET ?', proveedor);
        return result;
    }
    async listarProveedores(){
        const conn = await getConnection();
        const results = await conn.query("SELECT * FROM proveedores ORDER BY id DESC");
        return results;

    }
}

module.exports = {
    MySQLProveedorRepository,
};