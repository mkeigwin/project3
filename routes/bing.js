const bing              = require('express').Router();
const { getBingImage }  = require('../services/bing')

bing.route('/')
.post(getBingImage, (req, res) => {
  res.json(res.bing || []);
})

module.exports = bing;
