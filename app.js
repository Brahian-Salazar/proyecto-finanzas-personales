import Transaccion from "./Transaccion.js"
import HistorialFinanciero from "./HistorialFinanciero.js"
import { separador, imprimirTitulo, imprimirResultado } from "./Consola.js"

const transaccion1 = new Transaccion ("t-001","Pago de Nómina", 2500.00, "ingreso","USD")
const transaccion2 = new Transaccion ("t-002", "Compra de Súper", 150.50, "GASTO", "USD")
const transaccion3 = new Transaccion ("t-003", "Suscripción Streaming", 15.99, "gasto", "USD")
const transaccion4 = new Transaccion ("t-004", "Trabajo Freelance", 600.00, "ingreso", "USD")
const transaccion5 = new Transaccion ("t-005","Cena Restaurante", 80.00, "gasto", "USD")
const transaccion6 = new Transaccion ("t-003", "Gimnasio", 25.00, "gasto", "USD")
const transacciones = new HistorialFinanciero()

transacciones.agregar(transaccion1)
transacciones.agregar(transaccion2)
transacciones.agregar(transaccion3)
transacciones.agregar(transaccion4)
transacciones.agregar(transaccion5)

imprimirTitulo("PRUEBA — ID DUPLICADO");
imprimirResultado(transacciones.agregar(transaccion6));

imprimirTitulo("FILTRAR INGRESOS");
imprimirResultado(transacciones.filtrarIngresos());


imprimirTitulo("FILTRAR GASTOS");
imprimirResultado(transacciones.filtrarGastos());


imprimirTitulo("CALCULAR BALANCE");
imprimirResultado(transacciones.calcularBalance());

imprimirTitulo("BUSCAR MOVIMIENTO EXISTENTE");
imprimirResultado(transacciones.buscarMovimiento("t-003"));


imprimirTitulo("BUSCAR MOVIMIENTO INEXISTENTE");
imprimirResultado(transacciones.buscarMovimiento("t-999"));


imprimirTitulo("ELIMINAR MOVIMIENTO");
imprimirResultado(transacciones.eliminarMovimiento("t-001"));

imprimirTitulo("ACTUALIZAR MONTO");
imprimirResultado(transacciones.actualizarMonto("t-005", 85.00));


imprimirTitulo("REPORTE COMPLETO");
transacciones.imprimirReporte();

console.log(separador);
console.log("Fin pruebas");