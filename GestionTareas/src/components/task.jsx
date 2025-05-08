import { useState } from "react";

function Task (proms) { 

    const [textoEditable, setTextoEditable] = useState(proms.tarea)
    const [edicion, setEdicion] = useState(false); 

    return(
        <div>
            <div className="flex items-center justify-between bg-purple-400 rounded-lg p-3 mb-3 shadow-md">
                <p className="text-white text-sm font-medium break-words w-44">{proms.tarea}</p>
                <div className="flex gap-2">
                    <button
                        className="bg-yellow-300 hover:bg-yellow-400 text-black text-xs px-3 py-1 rounded-md shadow-sm"
                        id={proms.id}
                        onClick={() => setEdicion(true)}
                    >Editar</button>
                    <p></p>
                    <button
                        className="bg-red-400 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-md shadow-sm"
                        id={proms.id}
                        onClick={() => proms.Eliminar(proms.id)}
                    >Borrar</button>
                </div>
            </div>
            {/*Modo edicion*/}
            {edicion?
            <div className="flex items-center justify-between bg-purple-400 rounded-lg p-3 mb-3 shadow-md">
                <input 
                    type="text"
                    value={textoEditable}
                    className="w-44 bg-purple-300 text-white text-sm px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Editar tarea..."
                    onChange={(e)=> { 
                        setTextoEditable(e.target.value);
                    }}
                />
                <button
                    className="bg-green-300 hover:bg-green-400 text-black text-xs px-3 py-1 rounded-md shadow-sm"
                    onClick={()=>{ 
                        proms.Editar(proms.id, textoEditable); 
                        setEdicion(false);
                        setTextoEditable(proms.tarea);
                    }}
                >Comfirmar</button>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-black text-xs px-3 py-1 rounded-md shadow-sm"
                    onClick={()=>{ 
                        setEdicion(false);
                        setTextoEditable(proms.tarea);
                    }}
                >Cancelar</button>
            </div>
            : 
            null}
        </div>
        
    )
}

export default Task; 