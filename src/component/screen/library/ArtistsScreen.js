import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export function ArtistsScreen() {
  useEffect(() => {
    console.log("Artists Screen")
  }, []);
  return (
    <View>
      <Text>Artists Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
