CREATE DATABASE IF NOT EXISTS karumawida;

USE karumawida;

/* DROP TABLE cursos; */
CREATE TABLE IF NOT EXISTS cursos (
    id                  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    curso 			    VARCHAR(255)	NOT NULL,
    capacidad 		    INT	            NOT NULL,
    precio 			    INT	            NOT NULL,   
    horas 			    VARCHAR(255)	NOT NULL,
    fecha_inicio 	    VARCHAR(255)	NOT NULL,
    fecha_termino 	    VARCHAR(255) 	NOT NULL,
    descripcion 	    VARCHAR(255)	NOT NULL,
    activo 			    BOOLEAN			DEFAULT false,
    img 			    LONGBLOB 		NOT NULL,
    created_at 		    TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM cursos;

/* DROP TABLE especies; */
CREATE TABLE IF NOT EXISTS categorias(
	id                  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    categoria 		    VARCHAR(255)    NOT NULL,
    clasificacion	    VARCHAR(255)    NOT NULL,
    descripcion 	    VARCHAR(255)    NOT NULL,
    created_at 		    TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM especies;

/* DROP TABLE especies; */
CREATE TABLE IF NOT EXISTS especies (
	id                  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre_especie 		VARCHAR(255)    NOT NULL,
    categoria_id 		INT 		    NOT NULL,
    nombre_cientifico	VARCHAR(255)    NOT NULL,
    origen				VARCHAR(255)    NOT NULL,
    habitat				VARCHAR(255)    NOT NULL,
    clasificacion_id	INT 		    NOT NULL,
    informacion_general VARCHAR(255)    NOT NULL,
    created_at 		    TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
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