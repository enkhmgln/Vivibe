import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View, Pressable } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Colors, createShadow } from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MAIN_ROUTES = ["home", "profile"]; // Changed from "index" to "home"

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  // Filter routes to only show main navigation items
  const mainRoutes = state.routes.filter((route) =>
    MAIN_ROUTES.includes(route.name)
  );

  return (
    <View
      style={[styles.container, { paddingBottom: bottom }, createShadow(8)]}
    >
      {mainRoutes.map((route) => {
        const isFocused =
          state.index === state.routes.findIndex((r) => r.name === route.name);
        const icon = getTabIcon(route.name);

        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={[
              styles.tab,
              isFocused && {
                backgroundColor: Colors.primary.main + "15",
              },
            ]}
          >
            <icon.Icon
              size={24}
              color={isFocused ? theme.colors.primary : Colors.text.secondary}
            />
            <Text
              variant="labelMedium"
              style={[
                styles.label,
                {
                  color: isFocused
                    ? theme.colors.primary
                    : Colors.text.secondary,
                  opacity: isFocused ? 1 : 0.8,
                },
              ]}
            >
              {icon.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const getTabIcon = (routeName: string): { Icon: any; label: string } => {
  const icons: Record<string, { Icon: any; label: string }> = {
    home: {
      Icon: ({ size, color }: { size: number; color: string }) => (
        <MaterialCommunityIcons name="home" size={size} color={color} />
      ),
      label: "Нүүр",
    },
    profile: {
      Icon: ({ size, color }: { size: number; color: string }) => (
        <MaterialCommunityIcons name="account" size={size} color={color} />
      ),
      label: "Профайл",
    },
  };

  return (
    icons[routeName] || {
      Icon: ({ size, color }: { size: number; color: string }) => (
        <MaterialCommunityIcons name="circle" size={size} color={color} />
      ),
      label: routeName,
    }
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.background.primary,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 32,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 32,
  },
  label: {
    marginLeft: 4,
    fontSize: 12,
  },
});
