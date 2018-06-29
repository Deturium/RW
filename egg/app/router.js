'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.resources('user', '/api/v1/user', controller.user);

  // router.resources('recite', '/api/v1/recite', controller.recite);

  // router.resources('book', '/api/v1/book', controller.book);

  router.get('/*', controller.default.index);
};
