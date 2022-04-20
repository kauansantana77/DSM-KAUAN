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
