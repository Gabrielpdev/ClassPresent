module.exports = {
  url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: true,
    extra: {
      ssl: true,
  },
  // type: "postgres",
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // url: process.env.DATABASE_URL,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_DATABASE,
  // migrations: [process.env.TYPEORM_MIGRATIONS],
  // entities: [process.env.TYPEORM_ENTITIES],
  // cli: {
  //   migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
  // },
  // extra: {
  //   ssl: true
  // }
}