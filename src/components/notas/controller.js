import MongoNotaRepository from './infraestructure/MongoNotaRepository'
import CrearNota from './application/crearNota'
import getAllNotas from './application/getAllNotas'

const NotaRepository = new MongoNotaRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const obtenerNotas = async (_, res, next) => {
  try {
    const query = getAllNotas({ NotaRepository })
    const notas = await query()
    res.status(200).json({
      data: notas,
      message: 'Notes listed'
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
export const crearNota = async (req, res, next) => {
  try {
    const query = CrearNota({ NotaRepository })
    const nota = await query(req.body)
    res.status(201).json({
      data: nota,
      message: 'created'
    })
  } catch (e) {
    next(e)
  }
}
