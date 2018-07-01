const Controller = require('egg').Controller;


class UserController extends Controller {

  async login() {
    const { username, password } = this.ctx.request.body

    const user = await this.ctx.model.User.findUser(username, password);

    if (user) {
      // this.ctx.cookie.set('username', username)
      this.ctx.body = user.username;
    } else {
      this.ctx.body = 'no such user'
    }
  }

  async logout() {
    // this.ctx.cookie.set()
  }

  async register() {
    const { username, password, email } = this.ctx.request.body

    const ret = await this.ctx.model.User.new(
      username, password, email
    );

    this.ctx.body = ret;
  }
}

module.exports = UserController;
