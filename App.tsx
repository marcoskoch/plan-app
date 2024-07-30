import { View, StatusBar } from "react-native";
import { Home } from "@screens/Home";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Center } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <Center flex={1} bg="$backgroundDark900">
          {fontsLoaded ? <Home /> : <View />}
        </Center>
      ) : (
        <Loading />
      )}

    </GluestackUIProvider>
  );
}

