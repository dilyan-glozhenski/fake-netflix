import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { theme } from "../shared/theme";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
