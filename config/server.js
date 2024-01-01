module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url : process.env.GOOGLE_REDIRECT_URI,
  
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
 google:  {
   enable: true,
   key: process.env.GOOGLE_AUTH_CLIENT_ID,
   secret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
   redirectUri : process.env.GOOGLE_REDIRECT_URI
  },
});
