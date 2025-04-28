import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
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
    // This is for the trailer movie
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
} = moviesSlice.actions;
