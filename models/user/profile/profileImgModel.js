import { DataTypes } from "sequelize";
import sequelize from "../../../config/database.js";

const ProfileImgs = sequelize.define("profileImg", {
    img_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    profileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

export default ProfileImgs;