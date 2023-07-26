"use strict";

/**
 * upload-form controller
 */
const AWS = require("aws-sdk");
const fs = require("fs");

const { createCoreController } = require("@strapi/strapi").factories;
AWS.config.update({
  accessKeyId: "AKIAWGXZKSUMP2IZPQ5F",
  secretAccessKey: "z/hpS5MtVzYVWr5WSGbYoda2gIvawumWSz0b8V4a",
  region: "eu-west-2", // Replace with your desired AWS region
});
module.exports = createCoreController(
  "api::upload-form.upload-form",
  ({ strapi }) => ({
    async uploadForm(ctx) {
      try {
        console.log(ctx.request.files, ctx.request.body);
        const s3BucketName = "stefphilips-forms";
        const s3 = new AWS.S3();

        const params = {
          Bucket: s3BucketName,
          Key: `forms/${ctx.request.body.form}/${ctx.request.files.attachment.name}`, // Optional folder path
          Body: fs.createReadStream(ctx.request.files.attachment.path),
          ACL: "public-read", // Change the ACL permission if required
        };
        // Upload file to S3
        const result = await s3.upload(params).promise();
        console.log("body>>>>>>>>>...", result);
        return { url: result.Location };
      } catch (err) {
        console.log(err);
        return "Email not  sent successfully!";
      }
    },
  })
);
