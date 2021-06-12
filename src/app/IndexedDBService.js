import Dexie from 'dexie'

export class IndexedDBService {
  constructor(name, stores) {
    this.db = new Dexie(name)
    this.db.version(1).stores(stores)
  }

  async getAll(itemName) {
    return await this.db.states.orderBy(itemName).toArray()
  }

  async getBy(itemName, itemValue) {
    return await this.db.states.where(itemName).equals(itemValue).first()
  }

  async save(object) {
    await this.db.states.add(object)
  }

  async update(object) {
    await this.db.states.put(object)
  }

  async delete(itemName, id) {
    await this.db.states.where(itemName).equals(id).delete()
  }
}

export default IndexedDBService
