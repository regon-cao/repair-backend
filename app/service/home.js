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
  async getUserInfo(params) {}
  async register(params) {
    console.log(this.app);
    let res = await this.app.mysql.insert("user", {
      ...params,
    });
    const insertSuccess = res.affectedRows === 1;
    if (insertSuccess) {
      return 0;
    } else {
      return 1;
    }
  }
}

module.exports = HomeService;
