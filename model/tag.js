module.exports=(sequelize, DataTypes,Model) => {
    class Tag extends Model { }
    Tag.init({
        id: {
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
            allowNull:false
        },
        title:DataTypes.STRING,
        description: DataTypes.TEXT
    }, { sequelize ,modelName: 'tag'});
    return Tag;
}
