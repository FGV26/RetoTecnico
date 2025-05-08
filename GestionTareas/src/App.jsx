
import Task from './components/task';
import { useState , useEffect } from 'react';
import {axi} from './services';

function App() {

  const [texto, setTexto] = useState(''); 
  const [textBus, setTextBus] = useState('')
  const [listaTextos, setlistaTextos] = useState([]);

  //Obtener datos 
  const obtenerTareas = async ()=>{ 
    const resp = await axi.getTask();
    setlistaTextos(resp)
  }
  //Agregar datos 
  const postTareas = async (texto) => { 
    const resp = await axi.postTask(texto); 
    obtenerTareas();
    
  }
  //Eliminar datos
  const deleteTareas = async (id) => { 
    const resp = await axi.deleteTask(id); 
    obtenerTareas(); 
  }
  const actulizarTarea = async(id,title)=> {
    const resp = await axi.putTask(id,title)
    obtenerTareas(); 
  }
  //Buscador
  const buscador = async (title)=> { 
    const resp = await axi.search(title)
    setlistaTextos(resp);
  }

  // function actualizarTarea(){ 

  // }

  //Cargar los datos 
  useEffect(()=>{
    obtenerTareas();
  },[])

  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-200">
      <div className="bg-purple-600 p-6 rounded-xl shadow-md w-[28rem] relative">
        <h1 className="text-white text-xl font-semibold mb-4">TO DO LIST</h1>
        <div className="flex items-center gap-2 mb-4">
          <input 
            type="text" 
            placeholder="Buscar tarea..." 
            value={textBus}
            className="flex-1 bg-purple-300 text-white placeholder-white px-3 py-2 border-b border-white focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-md"
            onChange={(e)=>setTextBus(e.target.value)}/>
          {/*Buscar Tarea*/}
          <button 
            type="button"
            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-md shadow-md"
            onClick={()=>{
              buscador(textBus); 
              setTextBus("");
            }}>Buscar</button>
          {/*Mostrar todo*/}
          <button 
            type="button"
            className="bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded-md shadow-md"
            onClick={obtenerTareas}
          >MostrarT</button>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <input 
            type="text" 
            placeholder="Ingrese una Tarea"
            value={texto}//Vaciar el texto pt1
            className="flex-1 bg-purple-500 text-white placeholder-gray-300 px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-white"
            onChange={(e)=> {
              setTexto(e.target.value)//Obtener texto escrito DOM
            }}/>
          <button 
            type="button" 
            className="bg-pink-400 hover:bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            onClick={()=>{
              postTareas(texto);//Llamar api 
              setTexto("");//pt2
            }}
          >+</button>
        </div>

        {/*Llamar componente*/}
        {
        listaTextos.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            tarea={task.title}
            Editar={actulizarTarea}
            Eliminar={deleteTareas}
          />
        ))}
      </div>
    </div>
  );  
}

export default App;