const pkg = require("../package");

module.exports = {
  appname: pkg.name,
  db: {
    username: "root",
    password: "root@123",
    database: "qbase",
    sequelize: {
      dialect: "sqlite",
      logging: false,
    }
  }
};
