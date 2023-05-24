import { FlatList, StyleSheet, Text, View } from "react-native";
import useHttp from "../../hooks/useHttp";
import Comment from "./Comment";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const CommentList = ({ postId }) => {
  const { loading, data, error } = useHttp(`/posts/${postId}/comments`);

  if (loading) {
    return <Loading text="Loading comments..." />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View>
      <Text style={styles.title}>Comments</Text>
      <FlatList
        data={data.comments}
        renderItem={({ item }) => <Comment item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
