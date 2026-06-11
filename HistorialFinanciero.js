import Transaccion from "./Transaccion.js";
export default class HistorialFinanciero{
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
    if(this.listaTransacciones.length === 0){
        return "No tienes ningun transaccion para realizar el reporte";
    }
    this.listaTransacciones.forEach((elemento)=>{
      console.log(`id: ${elemento.id}, descripcion: ${elemento.descripcion}, monto: ${elemento.monto}, tipo: ${elemento.tipo}, divisa: ${elemento.moneda}`);
    });
  }
  eliminarMovimiento(idTransaccion){
    const idExiste = this.buscarMovimiento(idTransaccion);
    if(!idExiste){
      return "Error: El movimiento no existe";
    }
    const listaSinEliminado = this.listaTransacciones.filter((elemento)=> elemento.id !== idTransaccion);
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
  vaciarHistorial(){
    if(this.listaTransacciones.length === 0){
        return "El historial se encuentra vacio";
    }
    this.listaTransacciones = [];
    return "El historial fue vaciado correctamente"
  }
}
