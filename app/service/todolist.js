const { Service } = require('egg');

class TodolistService extends Service {
  async index() {
    const { app } = this;
    const data = await app.mysql.select('todolist');
    const total = await app.mysql.count('todolist');
    return { list: data, total };
  }

  async create(bodyParams) {
    const { app } = this;
    await app.mysql.insert('todolist', bodyParams);
  }

  async update(bodyParams) {
    const { app } = this;
    await app.mysql.update('todolist', bodyParams);
  }

  async destroy(id) {
    const { app } = this;
    await app.mysql.delete('todolist', { id });
  }
}

module.exports = TodolistService;
