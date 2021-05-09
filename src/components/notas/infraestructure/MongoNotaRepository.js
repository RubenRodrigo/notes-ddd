import MongoLib from '../../../lib/mongo'

class MongoNotaRepository {
  constructor () {
    this.collection = 'nota'
    this.mongoDB = new MongoLib()
  }

  async add (nota) {
    const id = await this.mongoDB.create(this.collection, nota)
    return { id, ...nota }
  }

  async getAll () {
    const query = null
    return this.mongoDB.getAll(this.collection, query)
  }
}

export default MongoNotaRepository
