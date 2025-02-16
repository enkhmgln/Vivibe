import { Stack } from "expo-router";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import { Colors } from "../constants/Colors";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4CAF50", // Vivibe green
    secondary: "#2E7D32",
    tertiary: "#1B5E20",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    error: "#D32F2F",
    text: "#1A1A1A",
    onSurface: "#1A1A1A",
    outline: "#E0E0E0",
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="splash"
      >
        <Stack.Screen name="splash" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="auth" />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
