import { StyleSheet, Text, View } from "react-native";

const Tag = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#F5EBEB",
    borderRadius: 8,
  },
});

export default Tag;
