import MongoPersonRepository from './infraestructure/MongoPersonRepository'
import createPerson from './application/createPerson'
import getAllPersons from './application/getAllPersons'

const PersonRepository = new MongoPersonRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getAllPerson = async (_, res, next) => {
  try {
    const query = getAllPersons({ PersonRepository })
    const notas = await query()
    res.status(200).json({
      data: notas,
      message: 'Persons listed'
    })
  } catch (e) {
    next(e)
  }
}

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const newPerson = async (req, res, next) => {
  console.log(req.body)
  try {
    const query = createPerson({ PersonRepository })
    const nota = await query(req.body)
    res.status(201).json({
      data: nota,
      message: 'created'
    })
  } catch (e) {
    next(e)
  }
}
