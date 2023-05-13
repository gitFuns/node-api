'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;


    ctx.body = {
      code: 200,
      data: +new Date(),
      message: 'success',
    };
  }
}

module.exports = HomeController;
