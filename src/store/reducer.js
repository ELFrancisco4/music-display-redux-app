
import { initialState } from "./store";

export const selectPicturePerfect = (state = initialState, action) => {
    switch(action.type){
      case "SELECT_PICTURE_PERFECT":
        return {
          title: state.songName + "Picture Perfect",
          songLength: state.songLength + "2:37" 
        }
        default:
          return state
    }
}

export const selectYourPower = (state = initialState, action) => {
  switch(action.type){
    case "SELECT_YOUR_POWER":
      return {
        title: state.songName + "Your Power",
        songLength: state.songLength + "4:06"
      }
      default:
        return state
  }
}

export const selectHearMeCalling = (state = initialState, action) => {
  switch(action.type){
    case "SELECT_HEAR_ME_CALLING":
      return {
        title: state.songName + "Hear Me Calling",
        songLength: state.songLength + "3:20" 
      }
      default:
        return state
  }
}


