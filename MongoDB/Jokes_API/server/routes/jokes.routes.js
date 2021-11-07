const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get('/api/jokes/', JokeController.findAllJokes);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.get('/api/jokes/:unicorn', JokeController.findOneJoke);
    app.put('/api/jokes/update/:id', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke);
}