const { Router }  = require('express');
const router = Router();

//routes

router.get('/test', (req, res) => {
    const data = {
        "name": "Jose",
        "web" : "www.galosoft.com"
    }
    res.json(data);
});

module.exports = router;

