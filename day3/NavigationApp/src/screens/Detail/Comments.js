import { StyleSheet, Button, View } from "react-native";
import React, { useState } from "react";
import CommentList from "./CommentList";

const Comments = ({ postId }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      {/* {!isVisible ? (
        <Button title="Show Comments" onPress={() => setIsVisible(true)} />
      ) : ( */}
      <CommentList postId={postId} />
      {/* )} */}
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({});
