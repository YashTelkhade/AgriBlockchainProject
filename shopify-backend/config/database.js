const parse  = require("pg-connection-string").parse;

module.exports = ({ env }) => {

  if(env('NODE_ENV')==='production'){
    const config = parse(process.env.DATABASE_URL)

    return{
      defaultConnection :'default',
      connection:{
        default:{
          connector:'bookshelf',
          settings:{
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
           
          },
          options:{
            ssl:false
          }
        }
      }
    }
  }
  
  return{
  defaultConnection:"default",
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_app'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'amrit12345'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
    },
    debug: false,
  }
}};
 
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
