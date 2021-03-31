module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey:
        "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",
    },
    settings: {
      defaultFrom: "jabetancur12@gmail.com",
      defaultReplyTo: "jabetancur12@gmail.com",
      testAddress: "jabetancur12@gmail.com",
    },
  },
  // ...
});
