import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const iconName = isLiked ? "md-heart" : "md-heart-outline";
  const color = isLiked ? "red" : "black";

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
        <Ionicons name={iconName} size={20} color={color} />
      </TouchableOpacity>

      <Text style={{ fontWeight: isLiked ? "bold" : "normal" }}>1.2k</Text>
    </View>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 4,
  },
});
