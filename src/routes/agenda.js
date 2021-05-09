import express from 'express'

import { validationHandler } from '../utils/middlewares/validationHandler'
import { createNoteSchema } from '../components/notas/domain/notes'

import { crearNota, obtenerNotas } from '../components/notas/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/notes', obtenerNotas)

router.post('/api/notes',
  // validationHandler(createNoteSchema),
  crearNota
)

export default router
