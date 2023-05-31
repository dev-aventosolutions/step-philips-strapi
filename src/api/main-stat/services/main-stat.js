'use strict';

/**
 * main-stat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-stat.main-stat');
