module.exports = {
  routes: [
    {
      method: "POST",
      path: "/upload-forms/s3",
      handler: "upload-form.uploadForm",
      config: {
        auth: false,
      },
    },
  ],
};
