import { Router } from 'express'
const router = Router()

import daos from '../daos/index.js'


router.post('/', async (req, res) => {
    const { nombre, precio, thumbnail } = req.body
    const producto = { nombre, precio, thumbnail }
    const response = await daos.ProductoDao.create(producto)

    res.json(response)
})

router.get('/', async (req, res) => {
    const response = await daos.ProductoDao.getAll()
    res.json(response)
})

router.get('/:id', async (req, res) => {
    const response = await daos.ProductoDao.getById(req.params.id)
    res.json(response)
})

router.put('/:id', async (req, res) => {
    const producto = { 
        nombre: req.body.nombre,
        precio: req.body.precio,
        thumbnail: req.body.thumbnail
    } 
    const id = req.params.id
    
    const response = await daos.ProductoDao.update(producto, id)
    res.json(response)
})

router.delete('/:id', async (req, res) => {
    const response = await daos.ProductoDao.delete(req.params.id)
    res.json(response)
})

export { router }