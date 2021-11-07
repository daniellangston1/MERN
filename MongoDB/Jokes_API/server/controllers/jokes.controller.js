const Joke = require('../models/jokes.model');

module.exports = {

    findAllJokes : (req, res) => {
        Joke.find()
          .then(allJokes => res.json({ jokes: allJokes }))
          .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    findOneJoke : (req, res) => {
        Joke.findOne({_id: req.params.unicorn})
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		    .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
    
    createNewJoke : (req, res) => {
        Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
      },
    
     updateExistingJoke : (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
          .then(updatedJoke => res.json({ joke: updatedJoke }))
          .catch(err => res.json({ message: "Something went wrong", error: err }));
      },
      
      deleteAnExistingJoke : (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
          .then(result => res.json({ result: result }))
          .catch(err => res.json({ message: "Something went wrong", error: err }));
      },

}