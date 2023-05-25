import { Button, StyleSheet, Text, View } from "react-native";
import useThemeStore from "../store/useThemeStore";
import useLangStore from "../store/useLangStore";

const Footer = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const lang = useLangStore((state) => state.lang);

  return (
    <View style={styles.container}>
      <Text>Footer</Text>
      <Text>Theme: {theme}</Text>
      <Text>Language: {lang}</Text>

      <Button title="Temayı Değiştir" onPress={toggleTheme} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
});
