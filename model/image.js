module.exports=(sequelize, DataTypes,Model) => {
    class Image extends Model { }
    Image.init({
        id: {
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
            allowNull:false
        },
        path:DataTypes.STRING,
        remote_url:DataTypes.STRING,
        rank:DataTypes.INTEGER
    }, { sequelize ,modelName: 'image'});
    return Image;
}
