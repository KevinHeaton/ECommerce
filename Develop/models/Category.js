const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {  
  // static newTable(body, models) {
  //   return models.Product.create({
  //     category_id: body.category_id,
  //     product_name: body.product_name,
  //     price: body.price,
  //     stock: body.stock
  //   }).then(() => {
  //     return Category.findAll({
  //       where: {
  //         id: body.category_id
  //       },
  //       attributes: [
  //         'id',
  //         'product_name',
  //         'price',
  //         'stock'
  //       ]
  //     });
  //   });
  // }
}

Category.init(
  {
    category_name : {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
