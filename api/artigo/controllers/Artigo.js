'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  // GET /hello
  byTag: async ctx => {
    // let entities;
    // if (ctx.query._q) {
    //   entities = await strapi.services.artigos.search(ctx.query);
    // } else {
    //   entities = await strapi.services.artigos.find(ctx.query);
    // }

    return ctx.tags;
    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.restaurant })
    );
  },
};
