import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import EmptyList from "./EmptyList";

const users = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  name: `User ${index}`,
}));

const Users = () => {
  const [data, setData] = useState(users);
  const [name, setName] = useState("");

  const addUser = () => {
    if (!name) return;

    setData([...data, { id: Math.floor(Math.random() * 1000), name }]);
    setName("");
  };

  const deleteUser = (userId) => {
    const filtered = data.filter((user) => user.id !== userId);
    setData(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TextInput
          style={styles.input}
          placeholder="please enter a user name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Button title="Add User" onPress={addUser} />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={[styles.listItem, item.id % 2 !== 0 ? styles.striped : {}]}
          >
            <Text style={styles.text}>{item.name}</Text>

            <Button title="delete" onPress={() => deleteUser(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyList />}
        // onRefresh={() => alert("Refreshed")}
        // refreshing={true}
      />

      {/* {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#eee",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
  },
  striped: {
    backgroundColor: "#EEE9DA",
  },
  buttons: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 22,
    flex: 1,
  },
});

export default Users;
