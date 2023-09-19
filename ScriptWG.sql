-- Creo 5 usuarios
INSERT INTO usuario (email, contraseña, nombre) values ("juani@yopmail.com","juanicapo","Juani De los Santos");
INSERT INTO usuario (email,contraseña,nombre) values ("valentin@yopemail.com","1q2w3ear","Valen crack");
INSERT INTO usuario (email,contraseña,nombre) values ("waldemargalizzi98@gmail.com","Argentina123","Waldemar Galizzi");
INSERT INTO usuario (email,contraseña,nombre) values ("burritoortega@gmail.com","Burrito123","Burrito Ortega");
INSERT INTO usuario (email,contraseña,nombre) values ("ramiromori@gmail.com","patadura123","Ramiro Funes Mori");
INSERT INTO usuario (email,contraseña,nombre) values ("chachocoudet@gmail.com","chacho123","Eduardo German Coudet");
-- Creo 3 publicaciones,
INSERT INTO publicacion (contenido,fecha,id_usuario) values ("Mi vieja mula ya no es lo que era", current_timestamp(),1);
INSERT INTO publicacion (contenido, fecha, id_usuario) values ("Extrañaba la lluvia", current_timestamp(), 2);
INSERT INTO publicacion (contenido, fecha, id_usuario) values ("Extrañaba la lluvia", current_timestamp(), 1);
INSERT INTO publicacion (contenido, fecha, id_usuario) values ("Prueba 1", current_timestamp(), 1);  
INSERT INTO publicacion (contenido, fecha, id_usuario) values ("Odio la humedad", current_timestamp(), 3);
INSERT INTO publicacion (contenido, fecha, id_usuario) values ("Pongan de DT al chacho", current_timestamp(), 6);

-- Pongo MG en la publicacion 1 del usuario 1 ejecutado 2 veces
INSERT INTO megusta (fecha,id_publicacion,id_usuario) values (current_timestamp(), 1, 1);
-- Pongo MG a la publicacion 3 del usuario 1
INSERT INTO megusta (fecha,id_publicacion,id_usuario) values (current_timestamp(),3,1);


-- Me traigo todo
SELECT *from usuario;
SELECT *from publicacion;
SELECT *from megusta;

-- Traigo las publicaciones del usuario 1
SELECT * FROM publicacion WHERE id_usuario = 1;
SELECT * FROM publicacion WHERE id_usuario = 1 AND contenido like 'Extrañaba la lluvia';

-- Creo consulta que muestre los likes de un post
SELECT * FROM megusta WHERE id_publicacion = 3;
SELECT * FROM publicacion WHERE id=3;

-- Ejemplo de que no hacer
UPDATE usuario SET descripcion = "Soy un tipazo";

SELECT * FROM usuario;

UPDATE usuarios set descripcion = "" WHERE email LIKE "%@yopmail.com";

-- Ejemplos dados por Lauti en clase
DELETE FROM usuario WHERE (nombre LIKE "%crack" and email="") OR contraseña = "juanicapo";
DELETE FROM usuario WHERE nombre = "%juani";
SELECT * FROM usuario where ID<1 AND ID>0;
SELECT * FROM usuario WHERE ID BETWEEN 0 AND 11;
-- Probando INNER JOIN
SELECT * FROM megusta INNER JOIN publicacion ON megusta.id_publicacion = publicacion.id;
-- Me traer todas las publicaciones
SELECT * FROM publicacion INNER JOIN usuario ON publicacion.id_usuario = usuario.id;

SELECT * FROM usuario u 
INNER JOIN publicacion p ON p.id_usuario = u.id;

SELECT * FROM usuario u
LEFT JOIN publicacion p ON p.id_usuario=u.id;

INSERT INTO megusta (fecha,id_publicacion,id_usuario) values (current_timestamp(),3,1);

SELECT count(*) from megusta WHERE id_publicacion = 3;





-- //////Ejercicio clase 6/8/23//////////
-- 
SELECT nombre,descripcion,contenido FROM usuario u 
INNER JOIN publicacion p ON p.id_usuario=u.id;
-- EJ del Lauti... no funca o lo copie mal 
SELECT u.nombre,u.descripcion p*FROM usuario u JOIN publicaciones p on u.id=p.id.usuario;

ALTER TABLE `red_social`.`usuario` 
ADD COLUMN `puntos` INT;

UPDATE usuario set puntos=1;
UPDATE usuario SET puntos=puntos+1 WHERE id=1;
UPDATE usuario SET puntos=puntos+2 WHERE id=2;
UPDATE usuario SET puntos=puntos+3 WHERE id=3;
SELECT puntos FROM usuario; 
SELECT sum(puntos) from usuario; 

SELECT *FROM imagen;
SELECT *FROM publicacion;
INSERT INTO imagen(url,fecha,id_publicacion) values ("asdasdasdasd",current_timestamp(),1);
INSERT INTO imagen(url,fecha,id_publicacion) values ("asdasdasdasde",current_timestamp(),2);
INSERT INTO imagen(url,fecha,id_publicacion) values ("asdasdasdasded",current_timestamp(),3);
INSERT INTO imagen(url,fecha,id_publicacion) values ("asdasdasdasded",current_timestamp(),6);
SELECT COUNT(id_publicacion) as cont FROM imagen i;

-- Traer pbulicaciones que tienen una imagen
SELECT * FROM publicacion p  
INNER JOIN imagen i ON p.id=i.id_publicacion;

-- Traer la publicacion que tiene una imagen junto el nombre del usuario que la publico
SELECT p.id AS publicacion_id,u.id As usuario_id,i.id AS imagen_id, u.nombre AS nombre_usuario 
FROM publicacion p
INNER JOIN imagen i ON p.id=i.id_publicacion
INNER JOIN usuario u ON p.id_usuario=u.id;









  