<<<<<<< HEAD
import React from "react";
import { View, Text } from "react-native";

const quadradosColoridos = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        height: 500,
        padding: 20,
        justifyContent:'space-between'
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <Text>Square 1</Text>
      <View style={{ backgroundColor: "red", flex: 0.3 }} />
      <Text>Square 2</Text>
      <View style={{ backgroundColor: "yellow", flex: 0.3 }} />
      <Text>Square 3</Text>
    </View>
  );
};

export default quadradosColoridos;
=======
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Txt from './components/Texto'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Txt/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 4dfc56b (questao3)
