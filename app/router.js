'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    app.get('/', app.controller.index.client);
    app.get('/login', app.controller.index.login);
    app.get('/client', app.controller.index.client);
};
