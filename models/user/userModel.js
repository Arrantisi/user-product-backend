import { DataTypes } from "sequelize"
import sequelize from "../../config/database.js";

import Products from "../product/productModel.js";
import Profile from "./profile/ProfileModel.js";
import ProfileImgs from "./profile/profileImgModel.js";
import ProductImgs from "../product/ProductModelImg.js";

const Users = sequelize.define("user", {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 225]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

Users.hasMany(Products);
Products.belongsTo(Users, { foreignKey: "userId" });

Profile.hasOne(ProfileImgs, { foreignKey: "profileId" });
ProfileImgs.belongsTo(Profile, { foreignKey: "profileId" });

Users.hasOne(Profile, { foreignKey: "userId" });
Profile.belongsTo(Users, { foreignKey: "userId" });

Products.hasOne(ProductImgs, { foreignKey: "productId" });
ProductImgs.belongsTo(Products, { foreignKey: "productId" });

export default Users;