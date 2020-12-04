import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, Dimensions } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated'
import { HeaderMain } from '../../general/header'
import { ItemSong, BottomPopup } from '../../general/item'

const { Value, timing } = Animated
const { width, height } = Dimensions.get("window");
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import data from '../../../constant/Data'
const songs = data.songs
const popupList = data.popupList


export function HistoryScreen(props) {
    const [item, setItem] = useState(null)
    const [_scroll_y, set_scroll_y] = useState(new Value(0))
    const [popupRef, set_popupRef] = useState(React.createRef())

    useEffect(() => {
        console.log("History Screen")
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

    return (
        <View>
            <StatusBar backgroundColor='#CCCCCC' barStyle="light-content" />
            <Animated.View style={{
                height: _header_height,
                transform: [{ translateY: _header_translate_y }],
                opacity: _header_opacity
            }}>
                <HeaderMain navigation={props.navigation} />
            </Animated.View>
            <AnimatedFlatList
                ListHeaderComponent={
                    <>
                        <View>
                            <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: 10, marginVertical: 10 }}>History</Text>
                        </View>
                    </>
                }
                data={songs}
                renderItem={({ item, index }) => (<ItemSong data={songs} item={item} index={index} onShowPopup={onShowPopup} setItem={setItem1} navigation={props.navigation} />)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={5}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: _scroll_y } } }],
                    { useNativeDriver: true }
                )}
                ListFooterComponent={
                    <BottomPopup
                        title="Demo popup"
                        ref={(target) => set_popupRef(target)}
                        onTouchOutside={onClosePopup}
                        data={popupList}
                        item={item}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})
