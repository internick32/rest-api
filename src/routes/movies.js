const { Router }  = require('express');
const router = Router();
const movies = require('../sample.json');
const _ = require('underscore');

//routes
router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { name, producer, year, rating} = req.body;
    if(name && producer && year && rating) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id }
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'Hubo un error'});
    }
});

router.delete('/:id', (req, res) => {
    const{ id } = req.params;
    _.each(movies, (movie, i) => {
        if(movie.id == id) {
            movies.splice(i, 1);
        }
    });
    res.send(movies);
});



module.exports = router;