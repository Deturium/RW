const Controller = require('egg').Controller;


class BookController extends Controller {
  async index() {
    const ctx = this.ctx;

    ctx.body = {
      topic_id: "122",
    };
    ctx.status = 201;
  }

  async create() {

  }

}

module.exports = BookController;
