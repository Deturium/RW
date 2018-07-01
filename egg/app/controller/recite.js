const Controller = require('egg').Controller;


class ReciteController extends Controller {

  async list() {
    const offset = await this.ctx.model.Record.cnt('melody');

    const ret = await this.ctx.model.Word.findAll({
      where: {
        wordSet: 'CET4',
      },
      limit: 10,
      offset,
    })

    this.ctx.body = ret;
  }


  async create() {
    const { id } = this.ctx.request.body;
    const ret = await this.ctx.model.Record.new('melody', id);

    this.ctx.body = ret;
  }
}

module.exports = ReciteController;
