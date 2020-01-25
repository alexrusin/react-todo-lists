
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  List.associate = function({Todo, User }) {
    List.belongsTo(User);
    List.hasMany(Todo);
  };
  return List;
};