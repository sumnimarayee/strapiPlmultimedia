'use strict';

/**
 * intern service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intern.intern');
