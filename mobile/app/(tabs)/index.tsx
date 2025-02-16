import { ScrollView, View, RefreshControl } from "react-native";
import { Text, Surface, FAB } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import Animated, { FadeInUp, FadeIn } from "react-native-reanimated";
import { tw } from "../../lib/tailwind";

import { useAuthStore } from "../../store/auth";
import { EventCard } from "../../components/EventCard";
import { upcomingEvents } from "../../data/mockEvents";
import { Colors, createShadow } from "../../constants/Colors";

export default function HomeScreen() {
  const user = useAuthStore((state) => state.user);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`pb-24`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Animated.View
          entering={FadeIn}
          style={tw`bg-white rounded-b-3xl p-5 pt-10 shadow-md`}
        >
          <View style={tw`mb-6`}>
            <Text variant="headlineSmall" style={tw`text-gray-500`}>
              Сайн байна уу,
            </Text>
            <Text variant="headlineMedium" style={tw`text-gray-900 font-bold`}>
              {user?.fullName}
            </Text>
          </View>

          <View style={tw`flex-row gap-4`}>
            <Surface style={[tw`flex-1 p-4 rounded-xl`, createShadow(4)]}>
              <MaterialCommunityIcons
                name="calendar-check"
                size={24}
                color={Colors.primary.main}
              />
              <Text variant="titleLarge">3</Text>
              <Text variant="labelSmall" style={tw`text-gray-500`}>
                Удахгүй болох арга хэмжээнүүд
              </Text>
            </Surface>
            <Surface style={[tw`flex-1 p-4 rounded-xl`, createShadow(4)]}>
              <MaterialCommunityIcons
                name="calendar-clock"
                size={24}
                color={Colors.accent.purple}
              />
              <Text variant="titleLarge">2</Text>
              <Text variant="labelSmall" style={tw`text-gray-500`}>
                Шинэ захиалга
              </Text>
            </Surface>
          </View>
        </Animated.View>

        <View style={tw`p-5`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text variant="titleMedium" style={tw`text-gray-900 font-semibold`}>
              Удахгүй болох арга хэмжээнүүд
            </Text>
            <Text
              variant="labelLarge"
              style={tw`text-blue-500`}
              onPress={() => router.push("/(tabs)/explore")}
            >
              Бүгдийг харах
            </Text>
          </View>

          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>

        <View style={tw`p-5`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text variant="titleMedium" style={tw`text-gray-900 font-semibold`}>
              Шинэ захиалга
            </Text>
            <Text variant="labelLarge" style={tw`text-blue-500`}>
              Бүгдийг харах
            </Text>
          </View>
          {upcomingEvents.slice(0, 2).map((event) => (
            <EventCard key={event.id} event={event} compact />
          ))}
        </View>
      </ScrollView>

      <FAB
        icon="plus"
        label="Арга хэмжээ үүсгэх"
        style={tw`absolute right-4 bottom-24 bg-blue-500`}
        onPress={() => router.push("/events/create")}
      />
    </View>
  );
}
