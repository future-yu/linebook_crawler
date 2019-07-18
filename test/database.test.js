// const sql = require('../config/mysql.config')
const {Work} = require('../model')

async function getWork() {
    let work = await Work.findByPk(1)
    let tags = await  work.getTags()
    let images = await work.getThumbs()
    debugger
}
getWork()


// sql.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
