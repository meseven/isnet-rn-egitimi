import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("Ahmet");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("set ınterval çalıştı");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   console.log("count değişti");
  // }, [count]);

  // useEffect(() => {
  //   console.log("name değişti");
  // }, [name]);

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Button title="Arttır" onPress={() => setCount(count + 1)} />

      {/* <Text style={styles.text}>{name}</Text>
      <Button title="İsim Değiştir" onPress={() => setName("Mehmet")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    textAlign: "center",
  },
});

export default Counter;
