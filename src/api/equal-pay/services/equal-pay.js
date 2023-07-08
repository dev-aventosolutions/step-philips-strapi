'use strict';

/**
 * equal-pay service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::equal-pay.equal-pay');
