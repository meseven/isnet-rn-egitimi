import { StyleSheet, View } from "react-native";
import Map from "./Map";
import Overlay from "./Overlay";
// import useMessageStore from "../store/useMessageStore";

const Container = () => {
  // const setMessages = useMessageStore((state) => state.setMessages);

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
