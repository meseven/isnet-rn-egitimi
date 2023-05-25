import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
