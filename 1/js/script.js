'use strict';

const numberOfFilms = +prompt('Скільки серіалів Ви подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Останній переглянутий серіал?', ''),
      b = prompt('На скільки Ви його оціните?', ''),
      c = prompt('Останній переглянутий серіал?', ''),
      d = prompt('На скільки Ви його оціните?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);