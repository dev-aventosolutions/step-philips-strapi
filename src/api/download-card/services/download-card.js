'use strict';

/**
 * download-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-card.download-card');
