module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...

  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME", "safee.saqib1122@gmail.com"),
          pass: env("SMTP_PASSWORD", "qrtgcieextfgvcta"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "safee.saqib1122@gmail.com",
        defaultReplyTo: "safee.saqib1122@gmail.com",
      },
    },
  },
});
