import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { getAlbums } from '../../../constant/DataFireBase'
const { width, height } = Dimensions.get("window");

export function MiniListAlbum( {navigation}) {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        getData()

    }, []);
    const getData = async () => {
        let albums = await getAlbums()
        setAlbums(albums)
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.itemContainer]}
            onPress= {() => {
                navigation.navigate("DetailAlbum", {item: item, amount: listAlbum.length})
            }}>
                <Image source={{ uri: item.artwork }}
                    style={[styles.coverImage]} />
                <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={albums}
                horizontal
                snapToInterval={10}
                pagingEnabled
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    itemContainer: {
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: "center",
        width: width / 4,
    },
    coverImage: {
        width: width / 4,
        height: width / 4,
        borderRadius: 10
    },
    itemTitle: {
        marginTop: 7,
        fontSize: 15,
    }
})
