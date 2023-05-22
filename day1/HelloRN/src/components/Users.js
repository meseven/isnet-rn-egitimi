import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const users = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  name: `User ${index}`,
}));

const Users = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View
            style={[styles.listItem, item.id % 2 !== 0 ? styles.striped : {}]}
          >
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
  },
  text: {
    fontSize: 18,
  },
  striped: {
    backgroundColor: "#EEE9DA",
  },
});

export default Users;
