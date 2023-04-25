import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Review = db.define('review', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.STRING
  },
  review: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
});
 
export default Review;