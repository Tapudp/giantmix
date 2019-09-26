import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit App.tsx</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
