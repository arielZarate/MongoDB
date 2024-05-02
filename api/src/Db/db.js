const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/Adoptame";

const cnn = async () => {
  await mongoose.connect(URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = cnn;

/*

documentacion oficial mongoDB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");


   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 */

/* const { Sequelize } = require("sequelize");
const database = require("../Db/config");
require("../Db/associations");

// `postgres://${database.user}:${database.password}@${database.localhost}:${database.port}/${database.name_schema}`,
const sequelize = new Sequelize(
  `postgres://${database.user}:${database.password}@${database.localhost}:${database.port}/${database.name_schema}`,
  {
    //  host: 'localhost',
    dialect:
      "mysql" ,
    logging: false,
    native: false,
     define: {
      timestamps: false,
    },
  }
);

//========================================================================================

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

module.exports = sequelize;
 */
