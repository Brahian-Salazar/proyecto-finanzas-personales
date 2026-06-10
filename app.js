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
    const idExiste = this.buscarMovimiento(objetoTransaccion.id);
    if(idExiste){
      return "Error el identificador se encuentra duplicado";
    }
    objetoTransaccion.tipo = objetoTransaccion.tipo.toLowerCase();
    this.listaTransacciones.push(objetoTransaccion);
    return "Transaccion agregada con exito";
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
  eliminarMovimiento(idTransaccion){
    const idExiste = this.buscarMovimiento(idTransaccion);
    if(!idExiste){
      return "Error: El movimiento no existe";
    }
    const listaSinEliminado = this.listaTransacciones.filter((elemento)=> elemento.id != idTransaccion);
    this.listaTransacciones = listaSinEliminado;
    return "Transacción eliminada con éxito";
  }
  actualizarMonto(idTransaccion, nuevoMonto){
    if(nuevoMonto <= 0){
      return "Error: el monto debe ser mayor a cero";
    }
    const transaccionActualizar = this.buscarMovimiento(idTransaccion);
    if(!transaccionActualizar){
      return "Error: el movimiento no existe";
    }
    transaccionActualizar.monto = nuevoMonto;
    return "Monto actualizado con exito"
  }
}

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