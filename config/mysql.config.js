

const mysql_config = {
    host:'localhost',
    port:'3306',
    username:'root',
    password:'123456',
    database:'linebook',
    dialect:'mysql',
    pool:{
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
    define: {
        underscored: true,
    }
};

module.exports =  mysql_config;
