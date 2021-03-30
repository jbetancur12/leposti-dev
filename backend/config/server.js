module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  //url: env("HOST_API", "http:localhost:1337/api"),
  url: "https://leposti.ml/api",
  admin: {
    //url: env("HOST_ADMIN", "http:localhost:1337/admin"),
    url: "https://leposti.ml/dashboard",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d739c86433defbcaa2fe8e91a4828266"),
    },
  },
});
