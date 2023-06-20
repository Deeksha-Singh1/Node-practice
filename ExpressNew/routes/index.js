const router = require('express').Router();
const apiKeyMiddleWare = require('../middleware/apiKey');

router.use(apiKeyMiddleWare);

router.get('/',(req,res)=>{
  res.render('index', {
    title:'My Home page'
  });
});


router.get('/about',(req,res)=>{
  res.render('about', {
    title:'My About page'
  });
});

router.get('/download',(req,res)=>{
  res.download(path.resolve(__dirname)+'/about.html');
});

router.get('/api/products', (req,res)=>{
  res.json(
    [
      {
        id:'1',
        name:'Chrome'
      },
      {
        id:'2',
        name:'Firefox'
      }
    ]
  )
});

module.exports = router;