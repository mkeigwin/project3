const images = require('express').Router();
const { saveFavorites, getFavorites, deleteImage }  = require('../models/images');


images.get('/:username', getFavorites, (req, res) => {
  res.json(res.images || []);
})

images.post('/', saveFavorites, (req, res) => {
  res.json({ message: 'successfully saved image' });
})

images.delete('/:id', deleteImage, (req, res) => {
  res.json({message: 'removed'});
})

module.exports = images;
