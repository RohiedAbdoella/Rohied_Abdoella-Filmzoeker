const movieDatabase = movies['Movies'];

const addMoviesToDom = (movies) => {
    const movieContainer = document.getElementById("movie-container");
    const movieArray = movies.map(function (movie) {
        console.log(movie.imdbID);
        const movieLink = "https://www.imdb.com/title/" + movie.imdbID
        return "<li class='list-item'><a href=" + movieLink + "><img src=" + movie.Poster + " alt=''></a></li>"
        });

    movieArray.forEach(function (movie) {
        movieContainer.innerHTML += movie
    });
}

addMoviesToDom(movieDatabase);

const addEventListeners = function() {
    const radioButtons = document.querySelectorAll("input[name='filter']");
    radioButtons.forEach(function (button) {
        button.addEventListener('change', function (event) {
            handleOnChangeEvent(event.target.value);
        });
    });
}

addEventListeners();

const handleOnChangeEvent = (movies) => {
    switch (movies) {
        case 'newMovies':
            filterLatestMovies();
            break;
        case 'avengers':
            filterMovies("Avengers");
            break;
        case 'xmen':
            filterMovies("X-Men");
            break;
        case 'princess':
            filterMovies("Princess");
            break;
        case 'batman':
            filterMovies("Batman");
            break;
        default: 
            console.log("Oeps, er is iets fout gegaan!");
    };
}

const filterMovies = (wordInMovieTitle) => {
    const outcome = movieDatabase.filter(function (movie) {
        return movie.Title.includes(wordInMovieTitle);
    })
    removeLi();
    addMoviesToDom(outcome);
}

const filterLatestMovies  = () => {
    const latestMovies = movieDatabase.filter (function (movie) {
        return parseInt(movie.Year) >= 2014
    })
    removeLi();
    addMoviesToDom(latestMovies);
}

const removeLi = () => {
    const listItem = document.querySelectorAll(".list-item")
    listItem.forEach(function (item) {
       return item.remove();
    });
}

//
