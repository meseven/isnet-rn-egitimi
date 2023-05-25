import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Click" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
