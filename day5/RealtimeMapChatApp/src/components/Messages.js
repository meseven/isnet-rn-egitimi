import { FlatList, StyleSheet, View } from "react-native";
import Message from "./Message";
import { LinearGradient } from "expo-linear-gradient";
import useMessageStore from "../store/useMessageStore";

const Messages = () => {
  const messages = useMessageStore((state) => state.messages);
  const addMessage = useMessageStore((state) => state.addMessage);

  // const { socket } = useSocket(WEBSOCKET_URL);

  // useSocketEvent(socket, "new-message", {
  //   onMessage: (data) => {
  //     if (!data) return;
  //     addMessage(data);
  //   },
  // });

  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={["transparent", "rgba(0,0,0,0.4)"]}
        style={styles.gradient}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Message item={item} />}
          style={{ maxHeight: 160 }}
        />
      </LinearGradient>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {},
  gradient: {
    paddingHorizontal: 10,
  },
});
