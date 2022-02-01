import {Sequelize} from "sequelize"
import path from "path"

const sequelize = new Sequelize({
    dialect: "sqlite",
    host: path.join(__dirname, "..", "..", "main.db")
})

export default sequelize