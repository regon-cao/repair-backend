"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async login() {
    const { ctx } = this;
    const res = await ctx.service.home.login(ctx.request.body);
    ctx.body = res;
  }
  async getUserInfo() {
    const { ctx } = this;
    const res = await ctx.service.home.getUserInfo(ctx.request.body);
    ctx.body = res;
  }
  async register() {
    const { ctx } = this;
    const res = await ctx.service.home.register(ctx.request.body);
    if (res == 0) {
      ctx.body = {
        code: 0,
        message: "添加成功",
      };
    } else {
      ctx.body = {
        code: 1,
        message: "添加失败",
      };
    }
  }
}

module.exports = HomeController;
