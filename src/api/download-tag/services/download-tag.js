'use strict';

/**
 * download-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-tag.download-tag');
