import { movies } from "../../data.js"
import { NEXT_MOVIE, PREV_MOVIE, ADD_FAVS } from "../actions"

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

        case NEXT_MOVIE:
            return {
                ...state,
                sira: state.sira + 1,
            }

        case PREV_MOVIE:
            return {
                ...state,
                sira: state.sira - 1,
            }

        case ADD_MOVIE:
            return {
                ...state,
                favMovies: [...state.favMovies, state.movies[state.sira]],
                movies: state.movies.filter(mov => mov.id !== state.movies[state.sira].id),
                sira: state.sira === 0 ? 0 : state.sira - 1
            }

        default:
            return state
    }
}