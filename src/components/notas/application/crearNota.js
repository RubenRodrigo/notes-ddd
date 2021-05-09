/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoNotaRepository')} obj.NotaRepository
 */
export default ({ NotaRepository }) => {
  return async ({ name, number }) => {
    const nuevaNota = {
      name: name,
      number: number
    }
    return await NotaRepository.add(nuevaNota)
  }
}
