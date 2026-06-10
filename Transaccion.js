export default class Transaccion{
  constructor(id, descripcion, monto, tipo, moneda){
    this.id = id;
    this.descripcion = descripcion;
    this.monto = monto;
    this.tipo = tipo;
    this.moneda = moneda;
  };
};