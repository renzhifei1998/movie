const { Movie } = require('../../model/movie');
module.exports = async (req, res) => {
    let data = await Movie.find().sort({"mark":-1});
    res.send(data)
}