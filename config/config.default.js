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

  return {
    ...config,
    ...userConfig,
  };
};
