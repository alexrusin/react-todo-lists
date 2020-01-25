
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Todo.associate = function({List}) {
    Todo.belongsTo(List);
  };
  return Todo;
};