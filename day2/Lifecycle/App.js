import { Button, StyleSheet, Text, View } from "react-native";
import Users from "./src/components/Users";
// import Counter from "./src/components/Counter";
// import { useState } from "react";

export default function App() {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      {/* {isVisible ? <Counter /> : null}

      <Button
        title={isVisible ? "Gizle" : "Göster"}
        onPress={() => setIsVisible(!isVisible)}
      /> */}

      <Users />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
