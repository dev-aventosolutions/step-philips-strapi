'use strict';

/**
 * contact-tenant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-tenant.contact-tenant');
