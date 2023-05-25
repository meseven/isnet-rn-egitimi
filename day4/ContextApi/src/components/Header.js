import { View, Text, Button } from "react-native";
import useThemeStore from "../store/useThemeStore";
import useLangStore from "../store/useLangStore";

const Header = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const lang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);

  return (
    <View style={{ alignItems: "center" }}>
      <Text>Header</Text>
      <Text>Theme: {theme}</Text>
      <Text>Language: {lang}</Text>

      <View style={{ flexDirection: "row" }}>
        <Button
          title="Light"
          color={theme === "light" ? "red" : "lightblue"}
          onPress={() => setTheme("light")}
        />
        <Button
          title="Dark"
          color={theme === "dark" ? "red" : "lightblue"}
          onPress={() => setTheme("dark")}
        />
        <Button title="Değiştir" onPress={toggleTheme} color={"black"} />
      </View>

      <Button title="tr-TR" onPress={() => setLang("tr-TR")} />
      <Button title="en-US" onPress={() => setLang("en-US")} />
    </View>
  );
};

export default Header;
