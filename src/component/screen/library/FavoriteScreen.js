import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export function FavoriteScreen() {
  useEffect(() => {
    console.log("Favorite Screen")
  }, []);
  return (
    <View>
      <Text>Favorite Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
