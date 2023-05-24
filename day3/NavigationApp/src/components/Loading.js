import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import LottieView from "lottie-react-native";

const Loading = ({ text }) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/loading.json")}
      />

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: "Loading...",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
});

export default Loading;
