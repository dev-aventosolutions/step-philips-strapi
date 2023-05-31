'use strict';

/**
 * main-message router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::main-message.main-message');
