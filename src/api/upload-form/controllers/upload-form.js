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

        const formName = ctx.request.body.form;
        const uploadedFiles = [];
        // Loop through each file in ctx.request.files
        for (const fileKey in ctx.request.files) {
          const file = ctx.request.files[fileKey];
          const params = {
            Bucket: s3BucketName,
            Key: `forms/${formName}/${file.name}`, // Optional folder path
            Body: fs.createReadStream(file.path),
            ACL: "public-read", // Change the ACL permission if required
          };
          // Upload file to S3
          const result = await s3.upload(params).promise();
          uploadedFiles.push(result.Location);
        }

        console.log("Uploaded files:", uploadedFiles);
        return { urls: uploadedFiles };
      } catch (err) {
        console.log(err);
        return "upload not successfully!";
      }
    },
  })
);
