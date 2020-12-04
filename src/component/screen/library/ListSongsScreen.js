import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export function ListSongsScreen() {
  useEffect(() => {
    console.log("List Songs Screen")
  }, []);
  return (
    <View>
      <Text>List Songs Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
