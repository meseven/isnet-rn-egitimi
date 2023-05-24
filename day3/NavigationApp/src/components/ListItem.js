import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Detail", { id: item.id, title: item.title })
      }
    >
      <Text style={styles.text} numberOfLines={1}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 18,
  },
});

export default ListItem;
