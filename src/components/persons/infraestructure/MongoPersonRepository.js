import MongoLib from '../../../lib/mongo'

class MongoPersonRepository {
  constructor () {
    this.collection = 'person'
    this.mongoDB = new MongoLib()
  }

  async add (person) {
    const id = await this.mongoDB.create(this.collection, person)
    return { id, ...person }
  }

  async getAll () {
    const query = null
    return this.mongoDB.getAll(this.collection, query)
  }
}

export default MongoPersonRepository
