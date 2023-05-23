import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const colors = [
  "yellow",
  "lightblue",
  "lightgreen",
  "pink",
  "lightgrey",
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "brown",
  "black",
];

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  const [bg, setBg] = useState("yellow");

  const increase = () => setCount(count + amount);

  const decrease = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const changeBg = () => {
    const random = Math.floor(Math.random() * colors.length);
    setBg(colors[random]);
  };

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <View style={styles.inner}>
        <Text style={styles.text}>Count: {count}</Text>
        <View style={styles.buttons}>
          <Button title="Azalt" onPress={decrease} />
          <Button title="Arttır" onPress={increase} />
        </View>

        <View style={styles.bottom}>
          <Text style={styles.text}>Amount: {amount}</Text>
          <View style={styles.buttons}>
            <Button title="+1" onPress={() => setAmount(1)} />
            <Button title="+5" onPress={() => setAmount(5)} />
            <Button title="+10" onPress={() => setAmount(10)} />
          </View>
        </View>

        <Button title="Renk Değiştir" onPress={changeBg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 40,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  bottom: {
    marginVertical: 30,
  },
});

export default Counter;
