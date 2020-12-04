import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {AlbumScreen, ArtistsScreen, DownloadScreen, FavoriteScreen, ListSongsScreen, ListSongsUploadScreen} from '../library'
import {LibraryScreen, HomeScreen} from '../main'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export function LibraryNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} >
            <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
            <Stack.Screen name="ArtistsScreen" component={ArtistsScreen} />
            <Stack.Screen name="ListSongsScreen" component={ListSongsScreen} />
            <Stack.Screen name="AlbumScreen" component={AlbumScreen} />
            <Stack.Screen name="ListSongsUploadScreen" component={ListSongsUploadScreen} />
            <Stack.Screen name="DownloadScreen" component={DownloadScreen} />
            <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
