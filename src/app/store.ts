import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';


const songsReducer = () => {
  return [
      {title: 'I Miss the Misery', duration: '3:04'},
      {title:'Re-Align', duration: '4:21'},
      {title:'The Devil in I', duration: '5:42'},
      {title:'This Means War', duration: '6:09'},
  ]
};
const selectedSongReducer = (selectedSong=null, action:any) => {
  if(action.type === 'SONG_SELECTED') {
      return action.payload;
  }
  return selectedSong;
};

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    selectedSong: selectedSongReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
