import { View, Text } from "react-native";
import PropTypes from "prop-types";

const Header = ({ title, number1, number2, isLoading, user }) => {
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{title}</Text>
      <Text>{number1 + number2}</Text>
      <Text>{JSON.stringify(user)}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  number1: PropTypes.number,
  number2: PropTypes.number,
  isLoading: PropTypes.bool,
  user: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

Header.defaultProps = {
  title: "Ben Varsayılan Başlığım",
};

export default Header;
