const { MovieList } = require("../FakeData");

const movieService = () => {
    return MovieList;
};

module.exports = { movieService };
