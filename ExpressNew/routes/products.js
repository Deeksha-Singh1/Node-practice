const router = require('express').Router();

router.get('/products', (req, res)=>{
  res.render('products',{
    title:'My product page'
  })
})

module.exports = router;