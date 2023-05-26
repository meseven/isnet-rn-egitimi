import { StyleSheet, View } from "react-native";
import Map from "./Map";
import Overlay from "./Overlay";
import useMessageStore from "../store/useMessageStore";
import { useEffect } from "react";
import { initiateSocket, subscribe } from "../socketApi";

const Container = () => {
  const setMessages = useMessageStore((state) => state.setMessages);
  const addMessage = useMessageStore((state) => state.addMessage);

  useEffect(() => {
    initiateSocket();

    subscribe("new-message", (msg) => {
      addMessage(msg);
    });

    subscribe("initial-messages", (messages) => {
      setMessages(messages);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Map />
      <Overlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
