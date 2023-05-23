import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((error) => setError(error.message))
    //   .finally(() => setLoading(false));

    getData();
  }, []);

  const getData = async () => {
    try {
      const { data: userlist } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(userlist);

      const { data: posts } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${userlist[0].id}`
      );
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
};

export default Users;
