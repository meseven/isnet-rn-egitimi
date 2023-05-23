import { StyleSheet, SafeAreaView } from "react-native";
// import Form from "./src/components/Form";
// import Counter from "./src/components/Counter";
// import User from "./src/components/User";
import Users from "./src/components/Users";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <User /> */}
      {/* <Counter /> */}
      <Users />

      {/* <Form /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
