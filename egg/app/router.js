'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.post('/api/v1/login', controller.user.login)
  router.get('/api/v1/logout', controller.user.logout)
  router.post('/api/v1/register', controller.user.register)

  router.get('/api/v1/recite', controller.recite.list)
  router.post('/api/v1/recite', controller.recite.create)

  router.get('/api/v1/book', controller.book.list)
  router.post('/api/v1/book', controller.book.create)
  router.del('/api/v1/book', controller.book.del)

  // 404 or index page
  router.get('/*', controller.default.index)
};
