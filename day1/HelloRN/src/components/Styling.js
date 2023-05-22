import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box1]}>
        <View style={[styles.box11, styles.flexCenter]}>
          <Text>Box 11</Text>
        </View>
        <View style={[styles.box12, styles.flexCenter]}>
          <Text>Box 12</Text>
        </View>
        <View style={[styles.box13, styles.flexCenter]}>
          <Text>Box 13</Text>
        </View>
      </View>
      <View style={[styles.box2, styles.flexCenter]}>
        <Text>Box 2</Text>
      </View>
      {/* <View style={[styles.box3, styles.flexCenter]}>
        <Text>Box 3</Text>
      </View>
      <View style={[styles.box4, styles.flexCenter]}>
        <Text>Box 4</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "gray",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  box2: {
    backgroundColor: "#F5F0BB",
    flex: 1,
  },
  // box3: {
  //   backgroundColor: "#FD8A8A",
  //   flex: 1,
  // },
  // box4: {
  //   backgroundColor: "#ECA869",
  //   flex: 1,
  // },

  box11: {
    backgroundColor: "#F2D388",
    flex: 0.2,
  },
  box12: {
    backgroundColor: "#815B5B",
    flex: 0.2,
  },
  box13: {
    backgroundColor: "#554994",
    flex: 0.2,
  },
});

export default App;
