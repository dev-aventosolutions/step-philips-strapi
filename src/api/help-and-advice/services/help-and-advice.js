'use strict';

/**
 * help-and-advice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::help-and-advice.help-and-advice');
