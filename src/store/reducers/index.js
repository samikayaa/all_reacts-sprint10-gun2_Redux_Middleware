import { movies } from "../../data.js"

/* {
    id: 8,
    title: 'Memento',
    year: '2000',
    runtime: '113',
    genres: ['Mystery', 'Thriller'],
    director: 'Christopher Nolan',
    actors: 'Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior',
    plot: "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
    posterUrl:
      'https://www.moviemem.com/wp-content/uploads/2020/07/MEMENTO1SH.jpg',
} */

//app.jsx de gördüklerime bakarak initialState oluşturuyorum!
const initialState = {
    movies: movies, //yukarıdakini komple almış oldu.
    favMovies: [],
    sira: 0,
};

//AKSİYONLARIMIZ;
//NEXT_MOVIE
//PREVIOUS_MOVIE
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}