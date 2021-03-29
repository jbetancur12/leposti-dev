module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("HOST_API", "http://localhost/api"),
  admin: {
    url: env("HOST_ADMIN", "http://localhost/admin"),
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d739c86433defbcaa2fe8e91a4828266"),
    },
  },
});
