module.exports=(sequelize, DataTypes,Model) => {
    class Work extends Model { }
    Work.init({
        id: {
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
            allowNull:false
        },
        title:DataTypes.STRING,
        remote_url:DataTypes.STRING,
        banner_path:DataTypes.STRING,
        description: DataTypes.TEXT
    }, { sequelize ,modelName: 'work'});
    return Work;
}
