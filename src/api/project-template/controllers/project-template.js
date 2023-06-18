"use strict";

/**
 * about-us-new-article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::project-template.project-template",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::project-template.project-template")
        .findOne({
          where: { slug: id },
          populate: true,
        });

      if (!entity) {
        return ctx.notFound();
      }

      return entity;
    },
  })
);
