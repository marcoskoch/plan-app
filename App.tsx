import { Home } from "@screens/Home";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  if (!fontsLoaded) {
    return <View />
  }
  return (
    <Home />
  );
}

