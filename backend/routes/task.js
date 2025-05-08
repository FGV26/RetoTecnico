
const express = require('express'); 
const router = express.Router();
const { getTareas, getTareasID, postTarea, putTarea, deleteTarea, buscarTituloLepLe } = require('../controllers/task.controllers');

//Listar tareas
//Rutas fijas
router.get('/', getTareas); 

//Rutas dinamicas 
router.get('/:id',getTareasID); 
router.get('/titulo/:title',buscarTituloLepLe)

router.post('/', postTarea); 
router.put('/:id', putTarea); 
router.delete('/:id',deleteTarea)


module.exports = router; 