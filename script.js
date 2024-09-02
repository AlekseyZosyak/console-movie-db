
const numberOfFilms = Number(prompt('сколько фильмов вы смотрели?'));

const personalMuvieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}

if (personalMuvieDB.count < 10) {
    console.log('Слишком мало фильмов...');
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30) {
    console.log('Средний пользователь.');
} else if (personalMuvieDB.count >= 30) { 
    console.log('Вы киноман!');
} else {
    console.log(`Error : Count`);
}

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
// написать еще два варианта цикла
console.log(personalMuvieDB);