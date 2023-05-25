import { StyleSheet, View } from "react-native";
// import Counter from "./src/components/Counter";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { LangContextProvider } from "./src/context/LangContext";

function App() {
  return (
    <ThemeContextProvider>
      <LangContextProvider>
        <View style={styles.container}>
          <Header />
          <Footer />
        </View>
      </LangContextProvider>
    </ThemeContextProvider>
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
