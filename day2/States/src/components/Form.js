import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Form = () => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text>{email}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 22,
  },
});

export default Form;
