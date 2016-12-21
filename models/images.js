const db = require('./db.js');

function getFavorites(req, res, next) {
  console.log('the queried username is:', req.params.username )
 db.any('SELECT * FROM savedSearch WHERE username = $1;', [req.params.username])
 .then((images) => {
   res.images = images;
   next();
 })
 .catch(error => next(error));
}

function saveFavorites(req, res, next) {
 db.none(`INSERT INTO savedSearch (roverUrl, bingUrl, visionText, username) VALUES ($1, $2, $3, $4);`, [req.body.url, req.body.url2, req.body.text, req.body.username])
 .then(next())
 .catch(err => next(err));
}

function deleteImage(req, res, next) {
  db.none(`DELETE FROM savedSearch WHERE search_id = $1;`, [req.params.id])
  .then(next())
  .catch(err => next(err));
}

// function deleteFavorite(req, res, next) {
//  db.none(`DELETE FROM images WHERE id = $1`, [req.params.id])
//  .then(next())
//  .catch(err => mext(err));
// }


module.exports = { 
  getFavorites,
  saveFavorites,
  deleteImage 
};
 // showAllFavorites,
 
 // deleteFavorite



