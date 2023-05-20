'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/api/timestamp', controller.home.index);

  router.get('/api/version', controller.home.genversion);
};
