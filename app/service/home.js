"use strict";
const Service = require("egg").Service;

class HomeService extends Service {
  async login(params) {
    const { appId, appSecret } = this.app.config;
    const result = await this.ctx.curl(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${params.id}&grant_type=authorization_code`,
      {
        dataType: "json",
        timeout: 3000,
      }
    );
    return result.res.data;
  }
  async getUserInfo(params) {
    const { appId, appSecret } = this.app.config;
  }
}

module.exports = HomeService;
