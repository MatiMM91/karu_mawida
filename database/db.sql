CREATE DATABASE karumawida IF NOT EXISTS;

USE karumawida;

/* DROP TABLE cursos; */
CREATE TABLE cursos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    curso 			VARCHAR(255)	NOT NULL,
    capacidad 		VARCHAR(255)	NOT NULL,
    precio 			VARCHAR(255)	NOT NULL,
    horas 			VARCHAR(255)	NOT NULL,
    fecha_inicio 	VARCHAR(255)	NOT NULL,
    fecha_termino 	VARCHAR(255) 	NOT NULL,
    descripcion 	VARCHAR(255)	NOT NULL,
    activo 			BOOLEAN			NOT NULL,
    img 			LONGBLOB 		NOT NULL,
    created 		DATETIME 		NOT NULL
);
SELECT * FROM cursos;

/* DROP TABLE especies; */
CREATE TABLE categorias(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    categoria 		VARCHAR(255) NOT NULL,
    clasificacion	VARCHAR(255) NOT NULL,
    descripcion 	VARCHAR(255) NOT NULL
);
SELECT * FROM especies;

/* DROP TABLE especies; */
CREATE TABLE especies (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre_especie 		VARCHAR(255) NOT NULL,
    categoria_id 		INT 		 NOT NULL,
    nombre_cientifico	VARCHAR(255) NOT NULL,
    origen				VARCHAR(255) NOT NULL,
    habitat				VARCHAR(255) NOT NULL,
    clasificacion_id	INT 		 NOT NULL,
    informacion_general VARCHAR(255) NOT NULL,
    CONSTRAINT fk_especiecategoria
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
); 
SELECT * FROM especies;

SELECT 	esp.nombre_especie,
		cat.categoria,
		cat.clasificacion,
        esp.informacion_general
FROM 	especies esp
JOIN	categorias cat					
ON 		cat.id = esp.categoria_id;