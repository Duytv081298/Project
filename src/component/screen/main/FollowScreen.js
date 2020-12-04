import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, Dimensions, FlatList } from 'react-native';
import { ItemPost } from '../../general/item'
import { HeaderMain } from '../../general/header'
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const { width, height } = Dimensions.get("window");

import data from '../../../constant/Data'

const posts = data.post


export function FollowScreen(props) {
    const [_scroll_y, set_scroll_y] = useState(new Value(0))

    useEffect(() => {
        console.log("Follow Screen")
    }, []);

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
                data={posts}
                renderItem={ItemPost}
                renderItem={({ item, index }) => (<ItemPost item={item} index={index} navigation={props.navigation} />)}

                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={5}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: _scroll_y } } }],
                    { useNativeDriver: true }
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({});
