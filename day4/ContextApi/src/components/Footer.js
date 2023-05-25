import { Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const { lang } = useLang();

  return (
    <View style={styles.container}>
      <Text>Footer</Text>
      <Text>Theme: {theme}</Text>
      <Text>Language: {lang}</Text>

      <Button
        title="Temayı Değiştir"
        onPress={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
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
