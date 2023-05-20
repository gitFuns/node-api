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

  async genversion() {
    const { ctx } = this;

    const result = await ctx.curl('https://api.github.com/repos/gitFuns/node-api/commits/main', {
      dataType: 'json',
      timeout: 3000,
    });

    const { sha, commit: { author, message } } = result.data;
    ctx.body = {
      code: 200,
      data: {
        version: `sha-${sha.slice(0, 7)}`,
        name: author.name,
        content: message,
      },
      message: 'success',
    };
  }
}

module.exports = HomeController;
