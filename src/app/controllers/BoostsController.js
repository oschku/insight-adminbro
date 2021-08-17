const Boosts = require("../models/Boosts");

module.exports = {
  async index(req, res) {
    const boosts = await Boosts.find({}).limit(1000);
    res.send(boosts);
  }, 

};