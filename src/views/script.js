const { MySQLFabricanteRepository } = require("../repositories/mysql_fabricante.repository");
const { MySQLGrupoProductoRepository } = require("../repositories/mysql_grupo_producto.repository");
const { MySQLProveedorRepository } = require("../repositories/mysql_proveedor.repository");
const { MySQLProductoRepository } = require("../repositories/mysql_product.repository");
const { RegistrarProducto } = require("../productos/registrarProducto");
const { ListarFabricantes } = require("../fabricante/listarFabricantes");
const { RegistrarFabricante } = require("../fabricante/registrarFabricante");
const { ListarProveedores } = require("../proveedor/listarProveedores");
const { RegistrarProveedor } = require("../proveedor/registrarProveedor");
const { ListarGrupoProductos } = require("../grupoProducto/listarGrupoProductos");
const { RegistrarGrupoProducto } = require("../grupoProducto/registrarGrupoProducto");

const formularioProducto = document.querySelector("#formularioProducto");
const nombre = document.querySelector("#nombre");
const nombreExtranjero = document.querySelector("#nombreExtranjero");
const peso = document.querySelector("#peso");
const unidadMedida = document.querySelector("#unidadMedida");
const precio = document.querySelector("#precio");
const codigoBarra = document.querySelector("#codigoBarra");
const codigoAlterno = document.querySelector("#codigoAlterno");
const selectorProveedor = document.querySelector("#proveedor");
const selectorGrupo = document.querySelector("#grupo");
const selectorFabricante = document.querySelector("#fabricante");
const cleanBtn = document.querySelector(".btn-clean");

const formularioProveedor = document.querySelector("#formularioProveedor");
const nombreProveedor = document.querySelector("#nombreProveedor");

const formularioFabricante = document.querySelector("#formularioFabricante");

const formularioGrupo = document.querySelector("#formularioGrupo");
const nombreGrupo = document.querySelector("#nombreGrupo");

formularioProducto.addEventListener("submit", async (e) => {
	try {
		e.preventDefault();

		const producto = new RegistrarProducto(
			nombre.value,
			precio.value,
			nombreExtranjero.value,
			peso.value,
			unidadMedida.value,
			codigoBarra.value,
			codigoAlterno.value,
			selectorFabricante.value,
			selectorProveedor.value,
			selectorGrupo.value
		);

		console.log('ioio', producto);
	
		const repository = new MySQLProductoRepository();
		const savedProduct = await producto.registrarProducto(repository);
		console.log(savedProduct);
	
		formularioProducto.reset();
		nombre.focus();

	} catch (error) {
	  console.log(error);
	}
});

formularioProveedor.addEventListener("submit", async (e) => {
	try {
		e.preventDefault();

		const producto = new RegistrarProveedor(
			nombreProveedor.value,
		);
	
		const repository = new MySQLProveedorRepository();
		const savedProduct = await producto.registrarProveedor(repository);
		console.log(savedProduct);
	
		formularioProveedor.reset();
		cargarProveedores();
		nombre.focus();

	} catch (error) {
	  console.log(error);
	}
});

formularioFabricante.addEventListener("submit", async (e) => {
	try {
		e.preventDefault();
		const nombreFabricante = document.querySelector("#nombreFabricante");
		const fabricante = new RegistrarFabricante(
			nombreFabricante.value,
		);
		console.log('1', fabricante);
		const repository = new MySQLFabricanteRepository();
		const savedProduct = await fabricante.registrarfabricante(repository);
		console.log(savedProduct);
	
		formularioFabricante.reset();
		cargarFabricantes();
		nombre.focus();

	} catch (error) {
	  console.log(error);
	}
});

formularioGrupo.addEventListener("submit", async (e) => {
	try {
		e.preventDefault();

		const grupo = new RegistrarGrupoProducto(
			nombreGrupo.value,
		);
	
		const repository = new MySQLGrupoProductoRepository();
		const savedProduct = await grupo.registrarGrupoProducto(repository);
		console.log(savedProduct);
	
		formularioGrupo.reset();
		cargarGrupos();
		nombre.focus();

	} catch (error) {
	  console.log(error);
	}
});

cleanBtn.addEventListener("click", () => {
	formularioProducto.reset();
	formularioFabricante.reset();
	formularioGrupo.reset();
	formularioProveedor.reset();
	nombre.focus();
});

document.addEventListener('DOMContentLoaded', async function () {

	const tabs = document.querySelectorAll('.nav-link');
	const formularios = document.querySelectorAll('.tab-pane');

	tabs.forEach(tab => {
		tab.addEventListener('click', function (event) {
			event.preventDefault();

			const formularioId = tab.getAttribute('data-formulario');

			tabs.forEach(t => {
				t.classList.remove('active');
			});

			formularios.forEach(formulario => {
				formulario.style.display = 'none'; 
				formulario.classList.remove('show', 'active');
			});

			tab.classList.add('active');
			const formularioSeleccionado = document.getElementById(formularioId);
			formularioSeleccionado.style.display = 'block'; 
			formularioSeleccionado.classList.add('show', 'active');
		});
	});
});

async function cargarProveedores() {
	const proveedores = new ListarProveedores();
	const proveedoresRepository = new MySQLProveedorRepository();
	let listaProveedores = await proveedores.listarProveedores(proveedoresRepository);

	listaProveedores.forEach(proveedor => {
		const optionElement = document.createElement('option');
		optionElement.value = proveedor.id;
		optionElement.text = proveedor.nombre;
		selectorProveedor.appendChild(optionElement);
	});
}

async function cargarFabricantes() {
	const fabricantes = new ListarFabricantes();
	const fabricanteRepository = new MySQLFabricanteRepository();
	let listaFabricantes = await fabricantes.listarFabricantes(fabricanteRepository);

	listaFabricantes.forEach(fabricante => {
		const optionElement = document.createElement('option');
		optionElement.value = fabricante.id;
		optionElement.text = fabricante.nombre;
		selectorFabricante.appendChild(optionElement);
	});
}

async function cargarGrupos() {
	const grupos = new ListarGrupoProductos();
	const gruposRepository = new MySQLGrupoProductoRepository();
	let listaGrupos = await grupos.listarGrupoProductos(gruposRepository);

	listaGrupos.forEach(grupo => {
		const optionElement = document.createElement('option');
		optionElement.value = grupo.id;
		optionElement.text = grupo.nombre;
		selectorGrupo.appendChild(optionElement);
	});
}