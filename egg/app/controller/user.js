const Controller = require('egg').Controller;


class UserController extends Controller {

  async login() {
    const user = await this.ctx.model.User.findUser('melody');

    if (user) {
      this.ctx.body = user;
    } else {
      this.ctx.body = 'no such user'
    }
  }

  async logout() {

  }

  async register() {
    const ret = await this.ctx.model.User.new('pandaE', '123456', 'panda@jc.pdd');
    this.ctx.body = ret;
  }
}

module.exports = UserController;
