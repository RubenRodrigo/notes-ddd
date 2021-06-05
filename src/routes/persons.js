import express from 'express'

import { validationHandler } from '../utils/middlewares/validationHandler'
import { createPersonSchema } from '../components/persons/domain/persons'

import { newPerson, getAllPerson } from '../components/persons/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  // response.send('<h1>Hello World!</h1>')
  response.send('<h1>Hola Mundo!</h1>')
})

router.get('/api/persons', getAllPerson)

router.post('/api/persons',
  validationHandler(createPersonSchema),
  newPerson
)

export default router
