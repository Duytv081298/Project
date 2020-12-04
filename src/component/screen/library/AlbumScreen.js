import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export function AlbumScreen() {
  useEffect(() => {
    console.log("Album Screen")
  }, []);
  return (
    <View>
      <Text>Album Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
