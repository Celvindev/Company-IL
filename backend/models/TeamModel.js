import { Sequelize } from "sequelize";
import db from '../config/Database';

const {DataTypes} = Sequelize;

const Team = db.define('team', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: strue
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});

export default Users;