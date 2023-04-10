import { createSlice } from "@reduxjs/toolkit";
// import tuits from './tuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk}
  from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}


// const currentUser = {
//   "userName": "Naruto",
//   "handle": "@naruto",
//   "image": "naruto.jpg",
// };
//
// const templateTuit = {
//   ...currentUser,
//   "topic": "Life",
//   "time": "1h",
//   "liked": false,
//   "replies": 0,
//   "retuits": 0,
//   "likes": 0,
// }


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
          .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        },
  },

  reducers: {
    // deleteTuit(state, action) {
    //   const index = state
    //   .findIndex(tuit =>
    //       tuit._id === action.payload);
    //   state.splice(index, 1);
    // },
    // createTuit(state, action) {
    //   state.unshift({
    //     ...action.payload,
    //     ...templateTuit,
    //     _id: (new Date()).getTime(),
    //   })
    },
    // likeTuit(state, action) {
    //   const {tuitId, isLiked} = action.payload;
    //   const index = state.findIndex(tuit => tuit._id === tuitId);
    //   if (index !== -1) {
    //     state[index].liked = isLiked;
    //     state[index].likes += isLiked ? 1 : -1;
    //   }
    // },
  // }
});

// export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;

