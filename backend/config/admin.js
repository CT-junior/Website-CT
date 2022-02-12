module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a6dcde9b4a163c2d2824429b77138d4'),
  },
});
