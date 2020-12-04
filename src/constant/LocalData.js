import MusicFiles, { Constants, CoverImage } from "react-native-get-music-files-v3dev-test";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getSongs = async () => {
    let allTrack = {}
    await MusicFiles.getSongs({
        artist: "",
        album: "",
        batchSize: 0,
        batchNumber: 0,
        sortBy: Constants.SortBy.Artist,
        sortOrder: Constants.SortOrder.Ascending
    })
        .then(f => {
            allTrack = f
        })
        .catch(er => {
            console.log(er)
            allTrack = null
        });
    return allTrack
};

export const getAlbums = async () => {
    let allAlbum = {}
    await MusicFiles.getAlbums({
        batchSize: 0,
        batchNumber: 0,
        sortBy: Constants.SortBy.Artist,
        sortOrder: Constants.SortOrder.Ascending
    })
        .then(f => {
            allAlbum = f
        })
        .catch(er => {
            console.log(er)
            allAlbum = null
        });
    return allAlbum
};

export const getSinger = async () => {
    let allArtists = {}
    await MusicFiles.getArtists({
        batchSize: 0,
        batchNumber: 0,
        sortBy: Constants.SortBy.Artist,
        sortOrder: Constants.SortOrder.Ascending
    })
        .then(f => {
            allArtists = f
        })
        .catch(er => console.log(er));
    return allArtists
}


export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}