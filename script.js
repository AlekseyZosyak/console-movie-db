
const numberOfFilms = Number(prompt('сколько фильмов вы смотрели?'));

const personalMuvieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}

const a = prompt('Последний из просмотренных фильмов?');
const b = prompt('На сколько оцените его?');

personalMuvieDB.movies[a] = b;

console.log(personalMuvieDB);