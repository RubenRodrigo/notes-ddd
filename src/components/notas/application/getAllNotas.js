/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoNotaRepository')} obj.NotaRepository
 */
export default ({ NotaRepository }) => {
  return async () => { // parameters
    // verify parameters
    // check exist
    //
    return NotaRepository.getAll()
    // notify?
  }
}
