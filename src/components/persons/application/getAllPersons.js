/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonRepository')} obj.PersonRepository
 */
export default ({ PersonRepository }) => {
  return async () => { // parameters
    // verify parameters
    // check exist
    //
    return PersonRepository.getAll()
    // notify?
  }
}
