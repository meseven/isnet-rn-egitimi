import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import NewPostModal from "./src/components/NewPostModal";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // headerBackTitle: "Back",
          // headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Anasayfa",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
