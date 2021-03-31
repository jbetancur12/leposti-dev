module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  //url: env("HOST_API", "http:localhost:1337/api"),
  //url: "https://api.leposti.ml",
  //url: "https://leposti.ml/api",
  admin: {
    //url: env("HOST_ADMIN", "http:localhost:1337/admin"),
    //url: "https://leposti.ml/dashboard",
    //url: env("HOST_ADMIN", "/admin"), //https://dashboard.leposti.ml/",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d739c86433defbcaa2fe8e91a4828266"),
    },
  },
});
