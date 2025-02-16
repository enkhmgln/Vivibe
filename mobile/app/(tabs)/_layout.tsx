import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { CustomTabBar } from "../../components/CustomTabBar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: "transparent",
            elevation: 0,
            borderTopWidth: 0,
          },
          android: {
            backgroundColor: "transparent",
            elevation: 0,
            borderTopWidth: 0,
            height: 65,
          },
        }),
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Нүүр",
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Арга хэмжээ",
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профайл",
        }}
      />
    </Tabs>
  );
}
