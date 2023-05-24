import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const newPostData = {
  id: 99999,
  userId: 9,
  tags: ["software", "javascript", "react"],
  reactions: 2,
};

const NewPostModal = ({ setData }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <View>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Ionicons name="add-outline" size={32} color="white" />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <Text style={styles.title}>Create a new post</Text>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Ionicons name="close-outline" size={36} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <TextInput
                style={styles.input}
                placeholder="Post title"
                value={title}
                onChangeText={setTitle}
              />
              <TextInput
                style={styles.input}
                placeholder="Post body"
                multiline
                value={body}
                onChangeText={setBody}
              />
              <Button
                title="save"
                onPress={() => {
                  setData((prev) => ({
                    ...prev,
                    posts: [{ ...newPostData, title, body }, ...prev.posts],
                  }));

                  setIsVisible(false);
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default NewPostModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#f8f8f8",
    flex: 1,
  },
  wrapper: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    paddingVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 22,
    marginBottom: 4,
  },
});
