/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630153939079_2974';

  // add your middleware config here
  config.middleware = [];

  // csrf配置
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // mysql配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.98.241.220',
      // 端口号
      port: '3306',
      // 用户名
      user: 'vite-react',
      // 密码
      password: 'root',
      // 数据库名
      database: 'vite-react',
    },
  };

  // cors跨域配置
  config.cors = {
    origin: '*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
