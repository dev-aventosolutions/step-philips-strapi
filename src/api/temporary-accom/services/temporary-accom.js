'use strict';

/**
 * temporary-accom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::temporary-accom.temporary-accom');
