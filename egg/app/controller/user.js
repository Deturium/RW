const Controller = require('egg').Controller;


class UserController extends Controller {
  async index() {
    const user = await this.ctx.model.User.findAll();
    this.ctx.body = user;
  }

  async create() {

  }

}
module.exports = UserController;
