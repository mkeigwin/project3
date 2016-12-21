const fetch = require('node-fetch');
const BING_KEY = process.env.BING_KEY;


function getBingImage(req, res, next) {

  const searchWords = req.body.string;
  const URL = `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${searchWords}&count=5&license=ModifyCommercially`;

  const paramsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': BING_KEY,
    },
    body: searchWords,
  };
  fetch(URL, paramsObj)
   .then(r => r.json())
   .then((data) => {
     res.bing = data;
     next();
   })
.catch(e => console.log('error ***', e));

}


module.exports = { getBingImage };
