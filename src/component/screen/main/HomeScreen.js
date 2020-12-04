import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Animated, { Easing, log, set } from 'react-native-reanimated'
import { ItemSong, BottomPopup, ListAlbum, MiniListAlbum } from '../../general/item'
import { HeaderMain } from '../../general/header'
const { Value, timing } = Animated
const { width, height } = Dimensions.get("window");
import firestore from '@react-native-firebase/firestore';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import data from '../../../constant/Data'
const songs = data.songs
const popupList = data.popupList

export function HomeScreen(props) {
    const [item, setItem] = useState(null)
    const [_scroll_y, set_scroll_y] = useState(new Value(0))
    const [popupRef, set_popupRef] = useState(React.createRef())
    const [tracks, setTracks] = useState({
        limit: 0,
        trackarr: [],
        onRefresh: false,
    });
    useEffect(() => {
        console.log("Home Screen")
        getTrack()
    }, []);
    const setItem1 = (item) => {
        setItem(item)
    }
    const onShowPopup = () => {
        popupRef.show()
    }
    const onClosePopup = () => {
        popupRef.close()
    }

    const _diff_clap_scrolly_y = Animated.diffClamp(_scroll_y, 0, height / 15)
    const _header_height = Animated.interpolate(_diff_clap_scrolly_y, {
        inputRange: [0, height / 15],
        outputRange: [height / 15, 0],
        extrapolate: "clamp"
    })
    const _header_translate_y = Animated.interpolate(_diff_clap_scrolly_y, {
        inputRange: [0, height / 15],
        outputRange: [0, -height / 15],
        extrapolate: "clamp"
    })
    const _header_opacity = Animated.interpolate(_diff_clap_scrolly_y, {
        inputRange: [0, height / 15],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })


    const getTrack = () => {
        setTracks({
            trackarr: tracks.trackarr,
            limit: (tracks.limit + 7),
            onRefresh: true
        })
        let arr = []
        const trackCollection = firestore().collection('Tracks');
        trackCollection.orderBy("title", "desc")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    arr.push(doc.data())
                });
                setTracks({
                    limit: tracks.limit,
                    trackarr: tracks.trackarr.concat(arr),
                    onRefresh: false
                })
            })
            .catch(function (error) {
                setTracks({
                    limit: tracks.limit,
                    trackarr: tracks.trackarr.concat(arr),
                    onRefresh: false
                })
                console.log("Error getting documents: ", error);
            });
    }

    return (
        <View style={{ flex: 1}}>
            <StatusBar barStyle="light-content" />
            <Animated.View style={{
                height: _header_height,
                transform: [{ translateY: _header_translate_y }],
                opacity: _header_opacity
            }}>
                <HeaderMain navigation={props.navigation} />
            </Animated.View>
            <AnimatedFlatList
                style={{ flex: 1 }}
                ListHeaderComponent={
                    <>
                        <ListAlbum navigation={props.navigation} />
                        <Text style={styles.title} onPress={() => props.navigation.navigate('Album')}>Có thể bạn muốn nghe </Text>
                        <MiniListAlbum navigation={props.navigation} props={props} />
                    </>
                }
                data={tracks.trackarr}
                renderItem={({ item, index }) => (<ItemSong data={songs} item={item} index={index} onShowPopup={onShowPopup} setItem={setItem1} navigation={props.navigation} />)}
                keyExtractor={(item, index) => index + ""}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={5}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: _scroll_y } } }],
                    { useNativeDriver: true }
                )}
                onEndReached={() => getTrack()}
                onEndReachedThreshold={0}
                ListFooterComponent={
                    tracks.onRefresh == true ? (
                        <BottomPopup
                            title="Demo popup"
                            ref={(target) => set_popupRef(target)}
                            onTouchOutside={onClosePopup}
                            data={popupList}
                            item={item}
                        />
                    ) : (

                            <>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <ActivityIndicator />
                                </View>
                                <BottomPopup
                                    title="Demo popup"
                                    ref={(target) => set_popupRef(target)}
                                    onTouchOutside={onClosePopup}
                                    data={popupList}
                                    item={item}
                                />
                            </>
                        )
                }


            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'capitalize',
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold'

    }
});