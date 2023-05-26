import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import Form from "./Form";
import Messages from "./Messages";

const Overlay = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Messages />
        <Form />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    bottom: 0,
    width: "100%",
    height: "30%",
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Overlay;
