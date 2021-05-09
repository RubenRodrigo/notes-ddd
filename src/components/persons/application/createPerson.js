/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonRepository')} obj.PersonRepository
 */
export default ({ PersonRepository }) => {
  return async ({ name, number }) => {
    const newPerson = {
      name: name,
      number: number
    }
    return await PersonRepository.add(newPerson)
  }
}
