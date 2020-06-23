"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async login() {
    const { ctx } = this;
    const res = await ctx.service.home.login(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = HomeController;
