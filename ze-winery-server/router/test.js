const router = require('express').Router();


const data = {

   
        "name": "rest-api",
        "version": "1.0.0",
        "description": "REST-api for back-end express server for ze-winery app",
        "main": "index.js",
    
}

router.get('/', (req,res) =>  {
    res.send(data)
});


module.exports = router;