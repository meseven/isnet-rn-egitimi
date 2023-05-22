import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
// import Users from "./Users";
// import News from "./News";

const RNComponents = () => {
  const handleClick = () => {
    // alert("Merhaba");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.items}>
        {/* <Button title="Click" onPress={handleClick} /> */}

        {/* <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.text}>Merhaba</Text>
        </TouchableOpacity> */}

        {/* <Users /> */}

        {/* <News /> */}

        {/* <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        /> */}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={styles.header}>Header</Text>
              <TextInput placeholder="Username" style={styles.textInput} />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  items: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  button: {
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    borderWidth: 2,
    padding: 10,
    fontSize: 24,
    margin: 5,
  },
});

export default RNComponents;
