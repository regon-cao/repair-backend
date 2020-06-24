/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1592875605150_9944";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    appId: "wxa559fd8b18ebcc49",
    appSecret: "ec8fdcecd49b9131bd4f09545711ffa2",
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "rm-8vb56j4j5888e3w5mno.mysql.zhangbei.rds.aliyuncs.com",
      // 端口号
      port: "3306",
      // 用户名
      user: "abu",
      // 密码
      password: "123456",
      // 数据库名
      database: "repair",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
