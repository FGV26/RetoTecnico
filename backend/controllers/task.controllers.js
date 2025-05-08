
const db = require('../db/connection');

const MostrarTareas = 'SELECT * FROM task;'; 
const MostrarTareasID = 'SELECT * FROM task WHERE id = ? ;';
const InsertarTarea = 'INSERT INTO task (title) VALUES(?);'; 
const ActulizarTarea = 'UPDATE task SET title = ? WHERE id = ?;';
const EliminarTarea = 'DELETE FROM task WHERE id = ? ;'
const BuscarTarea = 'SELECT * FROM task WHERE title LIKE ?;'; 


const getTareas = (req, res) => { 
    db.query(MostrarTareas, (err,result)=> { 
        if(err){ 
            console.error("Error en la consulta:", err.message)
            return res.status(500).json({error: 'error del servidor'})
        }
        res.json(result); 
    })
} 

const getTareasID = (req, res)=>{ 

    const {id} = req.params; 

    //Validar que sea numero
    const numID = parseInt(id); 
    if(isNaN(numID)){ 
        return res.status(400).json({error:`Error, el id tiene que ser numero`})
    }

    db.query(MostrarTareasID,[id],(err,result)=> { 

        if(err){ 
            console.log('Error en la consulta...',err.message);
            return res.status(500).json({error: 'error del servidor'})
        }
        if (result.length === 0) {
            return res.status(404).json({error: 'Estudiante no encontrado' });
        }
        res.json(result); 
    })
} 

const postTarea = (req, res) =>{ 
    const {title} = req.body; 

    if(!title || title.trim()===''){ 
        return res.status(400).json({error:`Error, El titulo tiene que ser obligatorio`}); 
    }

    db.query(InsertarTarea,[title],(err,result)=>{ 
        if(err){ 
            console.log('Error en la consulta...',err.message);
            return res.status(500).json({error: 'error del servidor'})
        }

        res.json(result);
    })
} 

const putTarea = (req,res)=>{ 
    const {title} = req.body; 
    const {id} = req.params; 

    const numID = parseInt(id); 
    if(isNaN(numID)){ 
        return res.status(400).json({error:`Error, el id tiene que ser numero`})
    }

    if(!title || title.trim()===''){ 
        return res.status(400).json({error:`Error, El titulo tiene que ser obligatorio`}); 
    }

    db.query(ActulizarTarea,[title,id],(err,result)=> { 
        if(err){ 
            console.log('Error en la consulta...',err.message);
            return res.status(500).json({error: 'error del servidor'})
        }
        res.json(result); 
    })
}

const deleteTarea = (req,res)=>{
    const {id} = req.params; 

    const numID = parseInt(id); 
    if(isNaN(numID)){ 
        return res.status(400).json({error:`Error, el id tiene que ser numero`})
    }

    db.query(EliminarTarea,[id],(err,result)=> { 
        if(err){ 
            console.log('Error en la consulta...',err.message);
            return res.status(500).json({error: 'error del servidor'})
        }
        res.json(result)
    })
} 

const buscarTituloLepLe = (req,res)=> { 
    const {title} =req.params; 

    if(!title || title.trim()===''){ 
        return res.status(400).json({error:`Error, El titulo tiene que ser obligatorio`}); 
    }

    const filtro = `%${title}%`

    db.query(BuscarTarea,[filtro],(err,result)=>{ 
        if(err){ 
            console.log('Error en la consulta...',err.message);
            return res.status(500).json({error: 'error del servidor'})
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }          

        res.json(result)
    })
} 

module.exports = { getTareas, getTareasID , postTarea, putTarea, deleteTarea, buscarTituloLepLe} 
