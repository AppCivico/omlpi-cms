'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  // GET /hello
  byTag: async ctx => {
    const result = await strapi
      .query('artigo')
      .model.query(qb => {
        qb.where('id', '=', '1');
      })
      .fetch();

    const fields = result.toJSON();

    return fields;
  },
};
