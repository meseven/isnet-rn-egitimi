import { View, Text, Button } from "react-native";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <View>
      <Text>Header</Text>
      <Text>Count: {theme}</Text>
      <Text>Language: {lang}</Text>

      <Button title="tr-TR" onPress={() => setLang("tr-TR")} />
      <Button title="en-US" onPress={() => setLang("en-US")} />
    </View>
  );
};

export default Header;
