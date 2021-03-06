async function getMovie() {
    let name = document.getElementById('movieName').value;

    try {
        let data = await fetch(`http://www.omdbapi.com/?apikey=8e4040ce&t=${name}`);
        let movie = await data.json();
        // console.log(movie)
        if (movie.Response == 'False')
            notfound();
        else
            insertDetails(movie)
    }
    catch (err) {
        console.log('your error', err)
    }
}

//movie not found
function notfound() {
    let details = document.getElementById('movieDetails');
    details.innerHTML = null

    let details2 = document.getElementById('notFound');
    let image = document.createElement('img');
    image.src = 'https://i.makeagif.com/media/11-04-2015/mfnzwt.gif';

    details2.append(image)
}


// movie found
function insertDetails(movie) {
    let details2 = document.getElementById('notFound');
    details2.innerHTML = null

    let details = document.getElementById('movieDetails');
    details.innerHTML = null

    // poster
    let posterdiv = document.createElement('div');
    posterdiv.setAttribute('id', 'moviePoster');
    let image = document.createElement('img');
    image.src = movie.Poster;
    posterdiv.append(image);

    // details
    let moviediv = document.createElement('div');
    moviediv.setAttribute('id', 'moviediv');

    let recm = document.createElement('p')
    recm.innerHTML = 'Recomemned';
    recm.setAttribute('id', 'recomended')

    let name = document.createElement('p')
    name.innerHTML = `Name : ${movie.Title}`;

    let release = document.createElement('p')
    release.innerHTML = `Released : ${movie.Released}`;

    let language = document.createElement('p')
    language.innerHTML = `Language :  ${movie.Language}`;

    let rating = document.createElement('p')
    rating.innerHTML = `IMDB Rating : ${movie.imdbRating}`;

    if (Number(movie.imdbRating) > 8.5)
        moviediv.append(recm, name, release, language, rating);
    else
        moviediv.append(name, release, language, rating);

    details.append(posterdiv, moviediv)

}