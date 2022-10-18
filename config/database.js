  // strapi-api/config/database.js
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'ec2-44-207-126-176.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ddp9aldid85jge'),
        user: env('DATABASE_USERNAME', 'nufghyarakkhoz'),
        password: env('DATABASE_PASSWORD', '3b048c4c427d14d112d94342bdf82e7f373f30a7fbebd13a9a48349553e024bf'),
        ssl: {
          rejectUnauthorized: false,
        },
        // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      }
  }
});
// postgres://nufghyarakkhoz:3b048c4c427d14d112d94342bdf82e7f373f30a7fbebd13a9a48349553e024bf@ec2-44-207-126-176.compute-1.amazonaws.com:5432/ddp9aldid85jge
// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
