'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async index() {
    this.ctx.redirect('/index.html');
  }
}

module.exports = DefaultController;
