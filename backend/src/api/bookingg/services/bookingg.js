'use strict';

/**
 * bookingg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bookingg.bookingg');
