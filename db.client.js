const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://exo2_db_user:PM586qZze4KAauDdBK2QZzvbG7bpWDOM@dpg-cv128egfnakc738itgs0-a.frankfurt-postgres.render.com/exo2_db', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;