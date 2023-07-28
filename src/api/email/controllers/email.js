"use strict";

/**
 * email controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::email.email", ({ strapi }) => ({
  async sendEmail(ctx) {
    try {
      const mailOptions = {
        to: ctx.request.body.data.to,
        subject: ctx.request.body.data.subject,
        html: ctx.request.body.data.html,
      };
      if (ctx?.request?.body?.data?.attachments?.length) {
        mailOptions.attachments = [];
        ctx?.request?.body?.data?.attachments?.map((file) => {
          mailOptions?.attachments?.push({
            filename: file.filename,
            path: file.url,
          });
        });
      }
      // use this if you want to send only the link takes much less time
      //   const attachmentLinks = ctx.request.body.data.attachments.map(
      //     (file) => `<a href="${file.url}" download>${file.filename}</a>`
      //   );
      //   const attachmentLinksHtml = attachmentLinks.join("<br>");
      //   mailOptions.html += `<p>Attachments:</p>${attachmentLinksHtml}`;
      // }
      console.log(mailOptions);
      await strapi.plugin("email").services.email.send(mailOptions);
      await strapi.entityService.create("api::email.email", {
        data: {
          to: ctx.request.body.data.to,
          subject: ctx.request.body.data.subject,
          html: mailOptions.html,
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
          html: mailOptions.html,
          status: "failed",
        },
      });
      return "Email not sent successfully!";
    }
  },
}));
