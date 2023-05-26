import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useMessageStore from "../store/useMessageStore";

const Message = ({ item }) => {
  const setFocusedLocation = useMessageStore(
    (state) => state.setFocusedLocation
  );

  const { latitude, longitude } = item;

  return (
    <TouchableOpacity
      onPress={() =>
        setFocusedLocation({
          latitude,
          longitude,
        })
      }
    >
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default Message;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 5,
    color: "#000",
  },
});
