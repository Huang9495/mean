'use strict';
/**
 * Module dependencies
 */

module.exports = function (app) {
   // User Routes
   var users = require('/home/zhouzhou/meanjs/modules/users/server/controllers/tk1.server.controller');

  // send a image authentication api
  app.route('/api/tk1/picture').post(users.uploadImg);
  app.route('/api/tk1/addcar').post(users.addcar);
};

