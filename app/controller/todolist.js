const { Controller } = require('egg');

class TodolistController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await ctx.service.todolist.index();
    ctx.body = {
      code: 0,
      data,
    };
  }

  async create() {
    const { ctx } = this;
    const bodyParams = ctx.request.body;
    await ctx.service.todolist.create(bodyParams);
    ctx.body = {
      code: 0,
      message: 'success',
    };
  }

  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    const bodyParams = ctx.request.body;
    bodyParams.id = id;
    await ctx.service.todolist.update(bodyParams);
    ctx.body = {
      code: 0,
      message: 'success',
    };
  }

  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    await ctx.service.todolist.destroy(id);
    ctx.body = {
      code: 0,
      message: 'success',
    };
  }
}

module.exports = TodolistController;
