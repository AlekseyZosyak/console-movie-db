
const personalMuvieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        const {count} = personalMuvieDB;
        count = Number(prompt('сколько фильмов вы смотрели?').trim());
    
        while (count == '' || count == null || isNaN(count)) {
            count = Number(prompt('сколько фильмов вы смотрели?'));
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Последний из просмотренных фильмов?').trim();
            const b = prompt('На сколько оцените его?').trim();
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMuvieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMuvieDB.count < 10) {
            console.log('Слишком мало фильмов...');
        } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30) {
            console.log('Средний пользователь.');
        } else if (personalMuvieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log(`Error : Count`);
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMuvieDB);
        } else {
            console.log('Главный объект программы');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMuvieDB.privat) {
            personalMuvieDB.privat = false;
        } else {
            personalMuvieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`)

            if (genre === '' || genre == null) {
                console.log("Вы не ввели данные");
                i--;
            } else {
                personalMuvieDB.genres[i] = genre;
            }
        }
        personalMuvieDB.genres.forEach((item, i) => {
            console.log(`Под ${i + 1} номером любимый жанр: ${item}`)
        })
    }
}