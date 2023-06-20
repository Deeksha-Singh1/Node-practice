function apiKey(req, res, next){
  const api_key = 'Deeksha1511';
  console.log(req.query.api_key);
  const userApiKey = req.query.api_key;
  if(userApiKey && userApiKey === api_key){
    next();
  }
  else{
    res.json({message: 'Not allowed!'});
  }
  
}
module.exports=apiKey;