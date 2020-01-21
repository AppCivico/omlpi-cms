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
    //   entities = await strapi.services.artigo.search(ctx.query);
    // } else {
    //   entities = await strapi.services.artigo.find(ctx.query);
    // }
    // const tag = ctx.params.tag;

    // let entities = strapi
    //   .query('artigo')
    //   .search({ _q: 'tag1', _limit: 100, _sort: 'created_at:asc' });
    //
    const result = await strapi
      .query('artigo')
      .model.query(qb => {
        // qb.where('name', '=', 'tag1');
      })
      .fetch({withRelated: ['artigo.tags']});

    const fields = result.toJSON();

    return fields;

    // let entities = [];
    // entities = await contentManagerService.fetchAll(
    //   ctx.params,
    //   ctx.request.query
    // );
    // return strapi.services.artigo.fetchAll(ctx.query);
    // return entities;
    // return entities.map(entity =>
    //   sanitizeEntity(entity, { model: strapi.models.restaurant })
    // );


    /**
     * Retrieve records.
     *
     * @return {Array}
     */
    // let entities;
    // currentUser = await ctx.state.user;
    //
    // if (ctx.query._q) {
    //   entities = await strapi.services.devices.search(ctx.query);
    //   //console.log(entities);
    // } else {
    //   entities = await strapi.services.devices.find({ organization: currentUser.organization });
    //   //console.log(ctx.query);
    //   //console.log(currentUser.organization);
    // }
    // return entities.map(entity =>
    //   sanitizeEntity(entity, { model: strapi.models.devices })
    // );

  },
};
