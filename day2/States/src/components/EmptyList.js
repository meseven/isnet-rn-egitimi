import { View, Text, StyleSheet } from "react-native";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text>No Records</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EmptyList;
