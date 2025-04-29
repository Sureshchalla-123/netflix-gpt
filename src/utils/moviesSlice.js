import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    addMovieDetails: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    topRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    upComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.addMovieDetails = action.payload;
    },

    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {
  nowPlayingMovies,
  addTrailerMovie,
  popularMovies,
  topRatedMovies,
  upComingMovies,
  addMovieDetails,
} = moviesSlice.actions;
