import MusicFiles from 'react-native-get-music-files';

export const getAlls = async () => {
    let allTrack = {}
    await MusicFiles.getAll({
        blured: true,
        artist: true,
        duration: true,
        genre: true,
        title: true,
        cover: true,
        minimumSongDuration: 10000
    }).then(tracks => {
        allTrack = tracks
    }).catch(error => {
        console.log(error)
    })
    return allTrack
};