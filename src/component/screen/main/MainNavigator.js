import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { FollowScreen, HistoryScreen, HomeScreen, NotificationScreen, } from '../main';
import {LibraryNavigator} from '../library'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
export function MainNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor="#FF0000"
            inactiveColor="#CCCCCC"
            labelStyle={{ fontSize: 15 }}
            barStyle={{ backgroundColor: '#fff' }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (<Icon name="home" size={30} color={color} size={26} />)
                }}
            />
            <Tab.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => (<Icon name="history" size={30} color={color} size={26} />)
                }}
            />

            <Tab.Screen
                name="FollowScreen"
                component={FollowScreen}
                options={{
                    tabBarLabel: 'Follow',
                    tabBarIcon: ({ color }) => (
                        <IconMaterial name="television-clean" size={30} color={color} size={26} />)
                }}
            />
            <Tab.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color }) => (
                        <IconMaterial name="bell-ring-outline" size={30} color={color} size={26} />)
                }}
            />
            <Tab.Screen
                name="LibraryNavigator"
                component={LibraryNavigator}
                options={{
                    tabBarLabel: 'Personal',
                    tabBarIcon: ({ color }) => (
                        <IconMaterial name="account" size={30} color={color} size={26} />)
                }}
            />
        </Tab.Navigator>
    )
}
