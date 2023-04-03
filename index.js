/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Director } from "./Empleados/Director.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const empleado = new Empleado("Juan Perez", "1234343", 10000);
empleado.asignarclave("12345");
console.log(SistemaAutenticacion.login(empleado, "12345"));

const gerente = new Gerente("Pedro Rivas", "232344", 12000);
empleado.asignarclave("655");
console.log(SistemaAutenticacion.login(gerente, "655"));

//const director = new Director("Elena Moreno", "12345567", 15000);

const cliente = new Cliente("Leonardo", "13804050", "123224");
cliente.asignarclave("01111");
console.log(SistemaAutenticacion.login(cliente, "01111"));
