"use strict";

/**
 * email controller
 */
const AWS = require("aws-sdk");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::email.email", ({ strapi }) => ({
  async sendEmail(ctx) {
    try {
      const mailoptions = {
        to: ctx.request.body.data.to,
        subject: ctx.request.body.data.subject,
        html: ctx.request.body.data.html,
      };
      if (ctx?.request?.body?.data?.attachment?.filename) {
        mailoptions.attachments = [
          {
            filename: ctx.request.body.data.attachment.filename,
            path: ctx.request.body.data.attachment.url,
          },
        ];
      }
      await strapi.plugin("email").services.email.send(mailoptions);
      await strapi.entityService.create("api::email.email", {
        data: {
          to: ctx.request.body.data.to,
          subject: ctx.request.body.data.subject,
          html: ctx.request.body.data.html,
          attachment: ctx.request?.body?.data?.attachment?.url
            ? ctx.request?.body?.data?.attachment?.url
            : "",
          status: "sent",
        },
      });

      return "Email sent successfully!";
    } catch (err) {
      console.log("err>>>>>>>>>...", err);
      await strapi.entityService.create("api::email.email", {
        data: {
          to: ctx.request.body.data.to,
          subject: ctx.request.body.data.subject,
          html: ctx.request.body.data.html,
          attachment: ctx.request?.body?.data?.attachment?.url
            ? ctx.request?.body?.data?.attachment?.url
            : "",
          status: "failed",
        },
      });
      return "Email not  sent successfully!";
    }
  },
}));
