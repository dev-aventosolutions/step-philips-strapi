'use strict';

/**
 * main-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-message.main-message');
