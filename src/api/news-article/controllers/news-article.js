"use strict";

/**
 * about-us-new-article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::news-article.news-article",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::news-article.news-article")
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
