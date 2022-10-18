  // strapi-api/config/database.js
//   module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connection: {
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3000),
//         database: env('DATABASE_NAME', 'database'),
//         user: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'password123@$#'),
//         schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       }
//   }
// });

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});


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
