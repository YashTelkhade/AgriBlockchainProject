module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',"ABCD123456"),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',"ABCD123456"),
  },
  
});
