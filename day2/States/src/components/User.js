import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Ahmet",
    location: { city: "Istanbul" },
  });

  const handleChange = () => {
    // setUser({ ...user, id: 2 });

    setUser((prevState) => ({ ...prevState, id: 99 }));
  };

  return (
    <View>
      <Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>

      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>City: {user.location.city}</Text>

      <Button title="Değiştir" onPress={handleChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default User;
