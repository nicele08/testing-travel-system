const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permission.belongsToMany(models.Role, {
        through: models.rolepermission,
        as: 'roles',
        foreignKey: 'permission_id',
      });
    }
  }
  Permission.init({
    permissionName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};
