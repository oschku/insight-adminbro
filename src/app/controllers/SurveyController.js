const Surveys = require("../models/Surveys");

module.exports = {
  async index(req, res) {
    const surveys = await Surveys.find({}).limit(100);

    res.send(surveys);
  },
  async getOne(req, res) {
    const id = req.params.id
    const survey = await Surveys.find({ id })      
    res.send(survey);
  }

};