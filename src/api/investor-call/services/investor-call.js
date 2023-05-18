'use strict';

/**
 * investor-call service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::investor-call.investor-call');
