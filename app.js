//Proyecto finanzas personales

class Transaccion{
  constructor(id, descripcion, monto, tipo, moneda){
    this.id = id;
    this.descripcion = descripcion;
    this.monto = monto;
    this.tipo = tipo;
    this.moneda = moneda;
  };
};

class HistorialFinanciero{
  constructor(){
    this.listaTransacciones = [];
  };

  agregar(objetoTransaccion){
    this.listaTransacciones.push(objetoTransaccion)
  }
  filtrarIngresos(){
    const listaIngresos = this.listaTransacciones.filter((elemento)=> elemento.tipo === "ingreso");
    return listaIngresos;
  };

  filtrarGastos(){
    const listaGastos = this.listaTransacciones.filter((elemento)=> elemento.tipo === "gasto");
    return listaGastos;
  };

  calcularBalance(){
    const totalIngresos = this.filtrarIngresos().reduce((acum, elemento)=> acum + elemento.monto, 0);
    const totalGastos = this.filtrarGastos().reduce((acum, elemento)=> acum + elemento.monto, 0);
    return totalIngresos-totalGastos;
  };

  buscarMovimiento(idTransaccion){
    const transaccionBuscada = this.listaTransacciones.find((elemento)=> elemento.id === idTransaccion);
    return transaccionBuscada;
  };

  imprimirReporte(){
    this.listaTransacciones.forEach((elemento)=>{
      console.log(`id: ${elemento.id}, descripcion: ${elemento.descripcion}, monto: ${elemento.monto}, tipo: ${elemento.tipo}, divisa: ${elemento.moneda}`);
    });
  } 
}

const transaccion1 = new Transaccion ("t-001","Pago de Nómina", 2500.00, "ingreso","USD")
const transaccion2 = new Transaccion ("t-002", "Compra de Súper", 150.50, "gasto", "USD")
const transaccion3 = new Transaccion ("t-003", "Suscripción Streaming", 15.99, "gasto", "USD")
const transaccion4 = new Transaccion ("t-004", "Trabajo Freelance", 600.00, "ingreso", "USD")
const transaccion5 = new Transaccion ("t-005","Cena Restaurante", 80.00, "gasto", "USD")

const transacciones = new HistorialFinanciero()

transacciones.agregar(transaccion1)
transacciones.agregar(transaccion2)
transacciones.agregar(transaccion3)
transacciones.agregar(transaccion4)
transacciones.agregar(transaccion5)

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
console.log("imprimir reporte");
transacciones.imprimirReporte();