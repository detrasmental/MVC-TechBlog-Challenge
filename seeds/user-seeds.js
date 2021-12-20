const { User } = require('../models');

const userData = [
  {
    username: "Captain",
    email: "steverogers@gmail.com",
    password: "pass1234"
  },
  {
    username: "Hulk",
    email: "brucebanner@gmail.com",
    password: "pass1234"
  },
  {
    username: "ScarletWitch",
    email: "WandaMAximoff@gmail.com",
    password: "pass1234"
  },
  {
    username: "BlackPanther",
    email: "Tchalla@gmail.com",
    password: "pass1234"
  },
  {
    username: "Spidey1",
    email: "PeterParker@gmail.com",
    password: "pass1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;