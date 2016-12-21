const vision            = require('express').Router();
const { getVisionData }  = require('../services/vision');

vision.route('/')
  .post(getVisionData, (req, res) => {
  res.json(res.vision || []);
})

module.exports = vision;
