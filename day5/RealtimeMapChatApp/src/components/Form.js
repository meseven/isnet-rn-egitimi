import { StyleSheet, TextInput, Button, View } from "react-native";
import React, { useState } from "react";
import useMessageStore from "../store/useMessageStore";
import { sendMessage } from "../socketApi";

const Form = () => {
  const [text, setText] = useState("");
  const userLocation = useMessageStore((state) => state.userLocation);

  const handleSubmit = () => {
    if (!text) return;

    const data = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      ...userLocation,
    };

    sendMessage(data);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="yeni bir mesaj gönderin"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <View style={styles.btnContainer}>
        <Button title="Gönder" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: "#999",
    backgroundColor: "#f8f8f8",
    // borderRadius: 20,
    color: "#333",
  },
  btnContainer: {
    position: "absolute",
    right: 10,
  },
});
