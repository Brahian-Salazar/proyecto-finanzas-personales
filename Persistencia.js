import { writeFile, readFile} from "fs/promises"

export async function guardarDatos(listaTransacciones) {
    try{
        const json = JSON.stringify(listaTransacciones, null, 2);
        await writeFile("./datos.json", json)
        return "Datos subidos con exito"
    } catch(error){
        console.error(error)
    }
    
}

export async function cargarDatos() {
    try{
        const contenido = await readFile("./datos.json", "utf-8")
        const datos = JSON.parse(contenido)
        return datos
    } catch(error){
        return [];
    }
}