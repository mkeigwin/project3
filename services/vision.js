const fetch = require('node-fetch');
const VISION_KEY = process.env.VISION_KEY;

function getVisionData(req, res, next) {
  //console.log('oyoyoyoyoyoyo', req.body)
  const image = req.body.url;
  const URL = 'https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Description,Tags';
  const paramsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': VISION_KEY,
    },
    body: JSON.stringify({ 'url': image }),
  };
  fetch(URL, paramsObj)
   .then(r => r.json())
   .then((data) => {
     res.vision = data;
     next();
   })
.catch(e => console.log('error ***', e));
}


module.exports = { getVisionData };
