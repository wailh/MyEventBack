module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "1e865efd3690ac5d9b1c04454886fa25"),
    salt: env("API_TOKEN_SALT", "ISJjIIQJcn/L3Og6SuhYEQ=="),
  },
});
