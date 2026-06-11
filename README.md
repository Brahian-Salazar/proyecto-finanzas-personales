# 💰 Sistema de Gestión de Finanzas Personales

Un motor de lógica financiera robusto y escalable desarrollado bajo el paradigma de **Programación Orientada a Objetos (POO)**. Este componente de software permite administrar de forma centralizada, aislar y analizar flujos de efectivo (ingresos y gastos) garantizando la integridad de los datos, con persistencia local mediante archivo JSON.

---

## 🚀 Características Principales

- **Modelo Desacoplado:** Gestión de movimientos financieros mediante instancias dedicadas de objetos.
- **Consultas Aisladas:** Métodos optimizados para segmentar flujos de dinero sin alterar el estado original.
- **Cómputo Centralizado:** Procesamiento automático del balance neto global (soporta saldos negativos).
- **Indexación Única:** Motor de búsqueda integrado para localizar transacciones mediante identificadores alfanuméricos.
- **Persistencia Local:** Almacenamiento automático del historial en `datos.json` mediante el módulo nativo `fs/promises` de Node.js.
- **Interfaz CLI Formateada:** Módulo dedicado de consola con separadores visuales y bloques de prueba estructurados.

---

## 🏛️ Arquitectura del Software

El sistema se compone de cuatro módulos con responsabilidades únicas y bien definidas:

### 1. Clase `Transaccion` — `Transaccion.js`
Modela la entidad unitaria de un movimiento financiero. Cada registro contiene de forma interna:
- `id`: Cadena de texto alfanumérica única (Identificador).
- `descripcion`: Concepto o detalle del movimiento.
- `monto`: Valor numérico decimal de precisión (mayor a cero).
- `tipo`: Categoría restringida estrictamente a `"ingreso"` o `"gasto"`.
- `moneda`: Código internacional de 3 letras (ISO 4217, ej. `"USD"`).

---

### 2. Clase `HistorialFinanciero` — `HistorialFinanciero.js`
Componente central de la capa de negocio. Gestiona el almacenamiento en memoria y el procesamiento lógico del historial financiero.

- **Estado Interno:** `listaTransacciones` — Colección que indexa únicamente objetos de tipo `Transaccion`.

- **Métodos:**

| Método | Descripción |
|--------|-------------|
| `agregar(objetoTransaccion)` | Almacena una nueva instancia. Sanitiza el tipo a minúsculas y bloquea IDs duplicados. |
| `filtrarIngresos()` | Retorna una nueva lista exclusiva con los flujos de entrada. |
| `filtrarGastos()` | Retorna una nueva lista exclusiva con los flujos de salida. |
| `calcularBalance()` | Ejecuta la diferencia aritmética neta entre ingresos y gastos. |
| `buscarMovimiento(idTransaccion)` | Localiza y devuelve una instancia por su ID o `undefined` si no existe. |
| `imprimirReporte()` | Formatea y despliega el historial completo en la terminal. Valida lista vacía. |
| `eliminarMovimiento(idTransaccion)` | Elimina una transacción por ID usando estrategia de exclusión por filtrado. |
| `actualizarMonto(idTransaccion, nuevoMonto)` | Modifica el monto de una transacción existente. Bloquea valores menores o iguales a cero. |
| `vaciarHistorial()` | Resetea el historial completo a estado vacío. Valida que haya elementos antes de actuar. |

---

### 3. Módulo `Consola.js`
Módulo de utilidades para el formateo de la interfaz CLI. Aplica el Principio de Responsabilidad Única separando la lógica de presentación del orquestador principal.

| Exportación | Tipo | Descripción |
|-------------|------|-------------|
| `separador` | Constante | Línea divisoria visual para la terminal |
| `imprimirTitulo(titulo)` | Función | Imprime un bloque de sección con separadores |
| `imprimirResultado(operacion, resultado)` | Función | Imprime la etiqueta y el resultado de cada prueba |

---

### 4. Módulo `Persistencia.js`
Capa de acceso a datos. Gestiona la lectura y escritura del historial financiero sobre `datos.json` mediante el módulo nativo `fs/promises` de Node.js.

| Exportación | Tipo | Descripción |
|-------------|------|-------------|
| `guardarDatos(listaTransacciones)` | Función async | Serializa el historial a JSON y lo escribe en disco |
| `cargarDatos()` | Función async | Lee `datos.json` y reconstruye el historial en memoria |

---

## 🗂️ Estructura del Proyecto

```
proyecto-finanzas-personales/
├── Transaccion.js          # Entidad / Modelo de datos
├── HistorialFinanciero.js  # Lógica de negocio
├── Consola.js              # Utilidades de formateo CLI
├── Persistencia.js         # Capa de persistencia local
├── app.js                  # Orquestador y script de pruebas
├── datos.json              # Base de datos local (autogenerado)
└── package.json            # Configuración del proyecto
```

---

## 🛠️ Requisitos e Instalación

1. Asegúrate de tener instalado **Node.js** en tu sistema.
2. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Brahian-Salazar/proyecto-finanzas-personales.git
   ```
3. Entra a la carpeta del proyecto:
   ```bash
   cd proyecto-finanzas-personales
   ```
4. Ejecuta el script principal:
   ```bash
   node app.js
   ```

> **Nota:** El archivo `datos.json` se genera automáticamente en la raíz del proyecto al ejecutarse por primera vez. Actúa como base de datos local y persiste el historial entre ejecuciones.

---

## 👨‍💻 Autor

**Brahian Salazar**  
[@Brahian-Salazar](https://github.com/Brahian-Salazar)