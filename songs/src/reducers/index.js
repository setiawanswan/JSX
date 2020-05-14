import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Give me something', duration: '4:05'},
        { title: 'Right her', duration: '3:15'},
        { title: 'Bad Habbit', duration: '2:30'},
        { title: '123', duration: '5:20'},
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})