import { createStore,combineReducers } from 'redux';
import { selectHearMeCalling,selectPicturePerfect,selectYourPower  } from './reducer';

export const initialState = {
  songName: '',
  songLength: ''
}

const rootReducer = combineReducers({
    song1: selectPicturePerfect,
    song2: selectYourPower,
    song3: selectHearMeCalling
})



export const store = createStore(rootReducer)

console.log(store.getState())


