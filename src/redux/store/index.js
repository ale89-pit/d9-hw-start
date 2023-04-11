import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobAnnReducer from "../reducers/jobAnnReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import showJobEntReducer from "../reducers/showJobEntReducer";
const bigReducer = combineReducers({
  favorits : favoriteReducer,
  jobAnn : jobAnnReducer,
  showJob : showJobEntReducer,
})
const store = configureStore({
  reducer: bigReducer
});

export default store;
