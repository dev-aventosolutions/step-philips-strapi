module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET_NAME"),
          },
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
      },
    },
  },
  // ...

  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp-mail.outlook.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME", "webinquiry@stefphilips.com"),
          pass: env("SMTP_PASSWORD", "Manifestation@159"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: '"Stef&Philips" <webinquiry@stefphilips.com>',
      },
    },
  },


  seo: {
    enabled: true,
  }
});
