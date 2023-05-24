import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LikeButton from "../../components/LikeButton";

const Comment = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>@{item.user.username}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>

      <LikeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default Comment;
