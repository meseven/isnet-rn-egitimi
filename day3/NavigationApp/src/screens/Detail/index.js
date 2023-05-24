import { View, Text, StyleSheet, Button } from "react-native";
import useHttp from "../../hooks/useHttp";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Tag from "../../components/Tag";
import Comments from "./Comments";
import { useState } from "react";

const Detail = ({ route }) => {
  const { id } = route.params;

  const { loading, data, error } = useHttp(`/posts/${id}`);

  if (loading) {
    return <Loading text="Loading post..." />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.body}>{data.body}</Text>

      <View style={styles.tags}>
        {data.tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
      </View>

      <Comments postId={id} />

      <Text>selam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
  tags: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 10,
  },
});

export default Detail;
