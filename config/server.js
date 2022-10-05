module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6265ef0ec55a648f1b957e8bf99f0295'),
    },

    /**
     * @link https://github.com/strapi/strapi/issues/8848#issuecomment-827664123
     */
    watchIgnoreFiles: [
      '**/info.log',
      '**/error.log',
      '/srv/app/data/**',
    ],
  },
});
