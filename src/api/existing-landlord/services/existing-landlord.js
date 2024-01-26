'use strict';

/**
 * existing-landlord service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::existing-landlord.existing-landlord');
