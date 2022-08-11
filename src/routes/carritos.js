import { Router } from 'express'
const router = Router()

import daos from '../daos/index.js'

router.get('/', async (req, res) => {
    const response = await daos.CarritoDao.getAll()
    res.json(response)   
})

router.get('/:id', async (req, res) => {
    const response = await daos.CarritoDao.getAll(req.params.id)
    res.json(response)
})

router.post('/', async (req, res) => {
    
})

router.put('/:id', async (req, res) => {
    
})

router.delete('/', async (req, res) => {
    
})

export { router }