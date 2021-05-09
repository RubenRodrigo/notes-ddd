import express from 'express'
import { crearNota, obtenerNotas } from '../components/notas/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})
/*
router.get('/api/notes', (_, response) => {
  response.json(notes)
})
*/

router.get('/api/notes', obtenerNotas)

router.post('/api/notes', crearNota)

export default router
