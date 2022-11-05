/*
//will be used to access types inside of sequelize
module.exports = (sequelize, DataTypes) => {
  //defines the table as Posts
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //in here will be the structure for the table
  });
  //returning the object that we just created
  return Posts;
};
*/
