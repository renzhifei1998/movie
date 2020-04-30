const mongoose = require('mongoose');

//创建电影集合规则
const movieSchema = new mongoose.Schema({
    moviename: {
        type: String,
        minlength: 1,
        maxlength: 20,
        required: [true, '请填写电影名']
    },
    author: {
        type: String,
        minlength: 1,
        maxlength: 20,
        required: [true, '请填写导演名字']
    },
    date: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    },
    mark: {
        type: Number,
        default: 0
    },
    uid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

//创建集合
const Movie = mongoose.model('Movie', movieSchema);

// async function creatMovie() {
//     const movie = await Movie.create({

//     });
// }


//导出
module.exports = {
    // Movie: Movie
    Movie
}