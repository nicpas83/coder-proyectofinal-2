import express from 'express'
const app = express()
const puerto = 8000

//configuración
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//RUTAS
import {router as productos_routing } from './routes/productos.js'
app.use('/api/productos', productos_routing)

import {router as carritos_routing} from './routes/carritos.js'
app.use('/api/carritos', carritos_routing)



app.listen(puerto, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('Servidor iniciado...')
    }
})