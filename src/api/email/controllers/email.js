"use strict";

/**
 * email controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::email.email", ({ strapi }) => ({
  async sendEmail(ctx) {
    console.log("body>>>>>>>>>...", ctx.request.body);
    try {
      await strapi.plugin("email").services.email.send({
        to: ctx.request.body.data.to,
        from: ctx.request.body.data.from, // You can set a default 'from' address here or use the request body.data if needed.
        subject: ctx.request.body.data.subject,
        html: `<h1>Stef & Philips</h1>
        <p>${ctx.request.body.data.html}</p>`,
        attachments: [
          {
            filename: ctx.request.body.data.attachment.filename,
            path: ctx.request.body.data.attachment.url,
          },
        ],
      });
      await strapi.entityService.create("api::email.email", {
        data: {
          to: ctx.request.body.data.to,
          from: ctx.request.body.data.from,
          subject: ctx.request.body.data.subject,
          html: ctx.request.body.data.message,
          attachment: ctx.request.body.data.attachment.url,
          status: "sent",
        },
      });

      return "Email sent successfully!";
    } catch (err) {
      console.log("err>>>>>>>>>...", err);
      await strapi.entityService.create("api::email.email", {
        data: {
          to: ctx.request.body.data.to,
          from: ctx.request.body.data.from,
          subject: ctx.request.body.data.subject,
          html: ctx.request.body.data.message,
          attachment: ctx.request.body.data.attachment.url,
          status: "sent",
        },
      });
      return "Email not  sent successfully!";
    }
  },
}));
