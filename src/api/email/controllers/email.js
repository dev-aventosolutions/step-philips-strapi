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
        text: ctx.request.body.data.message,
        html: `<h1>Stef & Philips</h1>`,
      });
      return "Email sent successfully!";
    } catch (err) {
      console.log("err>>>>>>>>>...", err);
      return "Email not  sent successfully!";
    }
  },
}));
