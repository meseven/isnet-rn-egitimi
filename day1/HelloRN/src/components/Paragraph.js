import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Paragraph = ({
  title,
  description,
  commentCount,
  isVisible,
  onCommentPress,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={onCommentPress}>
        <Text style={styles.commentCount}>{commentCount} yorum</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  description: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
  },
  commentCount: {
    marginTop: 10,
  },
});

export default Paragraph;
