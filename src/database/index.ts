import {sequelize}  from 'sequelize'

export const database = new sequelize ({  //instancia 
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'victorflix_development',
    username: 'victorflix',
    password: 'victorflix',
    define: {
        underscored: true
    }
})

export { sequelize }
