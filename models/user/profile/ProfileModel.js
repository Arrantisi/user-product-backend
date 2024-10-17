import { DataTypes } from "sequelize";
import sequelize from "../../../config/database.js";

const Profile = sequelize.define("profile", {
    full_name: {
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

export default Profile;