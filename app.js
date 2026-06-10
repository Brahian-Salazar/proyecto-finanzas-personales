import Transaccion from "./Transaccion.js"
import HistorialFinanciero from "./HistorialFinanciero.js"




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

console.log("Prueba error")
console.log(transacciones.agregar(transaccion6))

console.log("Filtrar ingresos");
console.log(transacciones.filtrarIngresos());
console.log("Filtrar gastos");
console.log(transacciones.filtrarGastos());
console.log("calcular balance");
console.log(transacciones.calcularBalance());
console.log("buscar movimiento");
console.log(transacciones.buscarMovimiento("t-003"));
console.log("buscar movimiento indefinido")
console.log(transacciones.buscarMovimiento("t-999"));
console.log("Eliminar registro")
console.log(transacciones.eliminarMovimiento("t-001"))
console.log("imprimir reporte");
console.log("Actualizar monto");
console.log(transacciones.actualizarMonto("t-005", 85.00))
transacciones.imprimirReporte();