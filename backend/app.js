
const express  = require("express");
const dotenv = require('dotenv');
const cors = require('cors')

const app =  express(); //Instanciamos 
const taskRoutes = require('./routes/task.js')

// Midellware 
app.use(express.json());  
app.use(cors());
dotenv.config(); //Colocar puertos en ENV

app.use('/api/task',taskRoutes)


const PORT = process.env.port || 3000 ; 
app.listen(PORT, () => { 
    console.log(`Api corriendo en el puerto ${PORT}....`)
})