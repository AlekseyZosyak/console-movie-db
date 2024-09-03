
let numberOfFilms;

function start() {
    numberOfFilms = Number(prompt('сколько фильмов вы смотрели?'));

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = Number(prompt('сколько фильмов вы смотрели?'));
    }
}

start();

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Последний из просмотренных фильмов?');
        const b = prompt('На сколько оцените его?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMuvieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMuvieDB.count < 10) {
        console.log('Слишком мало фильмов...');
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30) {
        console.log('Средний пользователь.');
    } else if (personalMuvieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log(`Error : Count`);
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMuvieDB);
    } else {
        console.log('Главный объект программы');
    }
}
showMyDB(personalMuvieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`)
        personalMuvieDB.genres[i] = genre;
    }
}

writeYourGenres();

console.log(personalMuvieDB);

