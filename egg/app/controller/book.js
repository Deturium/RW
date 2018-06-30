const Controller = require('egg').Controller;


class BookController extends Controller {

  async list() {
    const words = await this.ctx.model.Book.list('melody');

    this.ctx.body = words;
  }

  async create() {
    const ret = await this.ctx.model.Book.new('melody', 4);

    this.ctx.body = ret;
  }

  async del() {
    const ret = await this.ctx.model.Book.del('melody', 1);

    this.ctx.body = ret;
  }

}

module.exports = BookController;
