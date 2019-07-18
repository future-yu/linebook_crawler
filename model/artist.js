module.exports=(sequelize, DataTypes,Model) => {
    class Artist extends Model { }
    Artist.init({
        id: {
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
            allowNull:false
        },
        name:DataTypes.STRING,
        description:DataTypes.TEXT,
    }, { sequelize ,modelName: 'artist'});
    return Artist;
}
