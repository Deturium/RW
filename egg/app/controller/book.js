const Controller = require('egg').Controller;
const Sequelize = require('sequelize')

class BookController extends Controller {

  async list() {
    const words = await this.ctx.model.Book.list('melody');

    const ret = await this.ctx.model.Word.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: words.map(w => w.id)
        }
      }
    });

    this.ctx.body = ret;
  }

  async create() {
    const { id } = this.ctx.request.body;

    const ret = await this.ctx.model.Book.new('melody', id);

    this.ctx.body = ret;
  }

  async del() {
    const { id } = this.ctx.request.body;

    const ret = await this.ctx.model.Book.del('melody', id);

    this.ctx.body = ret;
  }

}

module.exports = BookController;
