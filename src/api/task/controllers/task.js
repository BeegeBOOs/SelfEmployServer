"use strict";

/**
 *  task controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::task.task").findOne({
      where: { slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
  async create(ctx) {
    
    // const entity = await strapi.db.query("api::task.task").create(ctx.request.body);
    // const sanitizedEntity = await this.sanitizeOutput(entity);
    console.log(JSON.stringify(ctx.state.user, null, 2));
    const response = await super.create(ctx);
    

    return response;
  },
}));
