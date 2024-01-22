CREATE DATABASE electrondb;

USE electrondb;

CREATE TABLE productos(
  	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(500),
	precio decimal,
	nombreExtranjero VARCHAR(500),
	peso VARCHAR(50),
	unidadMedida VARCHAR(50),
	codigoBarra VARCHAR(500),
	idAlterno VARCHAR(50),
	fkGrupoProducto int,
	fkFabricante int,
	fkProveedor int,
	FOREIGN KEY (fkGrupoProducto) REFERENCES grupoProductos(id),
	FOREIGN KEY (fkFabricante) REFERENCES fabricantes(id),
	FOREIGN KEY (fkProveedor) REFERENCES proveedores(id),
);

CREATE TABLE fabricantes(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(500)
);

CREATE TABLE proveedores(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(500),
);

CREATE TABLE grupoProductos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(500),
);
