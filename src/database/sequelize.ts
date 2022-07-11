import { Error, Sequelize } from 'sequelize'

const sequelize = new Sequelize('dvdrental', 'postgres', 'pedrinho22', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: false
});

export default sequelize;
