import { View, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tw } from "../lib/tailwind";

const TABS = ["home", "events", "profile"] as const;

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        tw`absolute left-4 right-4 bottom-4 bg-white rounded-full shadow-lg`,
        { paddingBottom: Math.max(bottom, 12) },
      ]}
    >
      <View style={tw`flex-row items-center justify-around py-2`}>
        {TABS.map((tab) => {
          const isFocused = state.index === TABS.indexOf(tab);
          const icons: Record<
            (typeof TABS)[number],
            keyof typeof MaterialCommunityIcons.glyphMap
          > = {
            home: "home",
            events: "calendar",
            profile: "account",
          };

          return (
            <Pressable
              key={tab}
              onPress={() => navigation.navigate(tab)}
              style={tw`items-center px-6 py-2`}
            >
              <MaterialCommunityIcons
                name={icons[tab]}
                size={24}
                color={isFocused ? "#4CAF50" : "#9CA3AF"}
              />
              <Text
                style={[
                  tw`text-sm mt-1`,
                  isFocused
                    ? tw`text-[#4CAF50] font-medium`
                    : tw`text-gray-400`,
                ]}
              >
                {tab === "home"
                  ? "Feed"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
