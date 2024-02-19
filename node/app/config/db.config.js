module.exports = {
  HOST: "20.253.205.70",
  USER: "prateeknarayanan",
  PASSWORD: "postgres",
  DB: "postgres",
  PORT: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};