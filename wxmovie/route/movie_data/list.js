const { Movie } = require('../../model/movie');
module.exports = async (req, res) => {
    let data = await Movie.find();
    
    res.send(data)
}