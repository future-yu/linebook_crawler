const Sequelize = require('sequelize');
const mysql_config = require('../config/mysql.config');
let WorkFn = require('./work');
let ArtistFn = require('./artist');
let TagFn = require('./tag');
let ImageFn = require('./image');
let CategoryFn = require('./category');

let sequelize = new Sequelize(mysql_config);
let {DataTypes,Model} = Sequelize;


let Work = WorkFn(sequelize,DataTypes,Model);
let Artist = ArtistFn(sequelize,DataTypes,Model);
let Tag = TagFn(sequelize,DataTypes,Model);
let Image = ImageFn(sequelize,DataTypes,Model);
let Category = CategoryFn(sequelize,DataTypes,Model);


Work.hasMany(Image,{as:'Thumbs',foreignKey:'work_thumb_id'});
Work.hasMany(Image,{as:'DetailImages',foreignKey: 'work_detail_id'});
Work.belongsToMany(Tag,{through: 'WorkTag'});
Tag.belongsToMany(Work,{through: 'WorkTag'});
Work.belongsToMany(Category,{through: 'WorkCategory'});
Category.belongsToMany(Work,{through: 'WorkCategory'});
Category.hasMany(Tag,{as:'Tag',foreignKey:'category_id'});
Artist.hasMany(Work,{as:'Work',foreignKey:'artist_id'});

module.exports={
    Work,
    Artist,
    Tag,
    Image,
    Category,
    sequelize
};
