import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { theme } from "../shared/theme";
import { HomeHeader } from "@/shared/components/HomeHeader";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerTintColor: theme.colors.textPrimary,
          headerStyle: { backgroundColor: theme.colors.background },
          headerShadowVisible: false,
          headerTitle: ()=> <HomeHeader/>
        }} />
        <Stack.Screen name="movie/[id]" options={{
          title: '',
          headerBackButtonDisplayMode: 'minimal',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: { backgroundColor: theme.colors.background },
          headerShadowVisible: false,
        }} />
      </Stack>
    </Provider>
  );
}
