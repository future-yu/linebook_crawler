module.exports=(sequelize, DataTypes,Model) => {
    class Category extends Model { }
    Category.init({
        id: {
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
            allowNull:false
        },
        title:DataTypes.STRING,
        description: DataTypes.TEXT
    }, { sequelize ,modelName: 'category'});
    return Category;
}
