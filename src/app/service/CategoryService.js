import DBService from '../IndexedDBService'

const CATEGORY_FIELDS = ['++id', 'description']

const CATEGORY = {
  ID: 'id',
  DESCRIPTION: CATEGORY_FIELDS[1],
}
const CATEGORY_MODEL = {
  states: CATEGORY_FIELDS.join(','),
}

const DB_NAME = 'categories'

export default class CategoryService extends DBService {
  constructor() {
    super(DB_NAME, CATEGORY_MODEL)
  }

  async saveCategory(category_name) {
    await this.save({ description: category_name })
  }

  async getAllCategories() {
    return await this.getAll(CATEGORY.DESCRIPTION)
  }

  async getById(id) {
    return await this.getBy(CATEGORY.ID, id)
  }
}
