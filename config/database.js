import { Sequelize } from "sequelize";

const sequelize = new Sequelize("user_db", "root", null, {
    dialect: "mysql",
    host: "localhost"
});

export default sequelize;