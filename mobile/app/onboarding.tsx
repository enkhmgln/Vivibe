import { View, Image, useWindowDimensions } from "react-native";
import { Text, Button } from "react-native-paper";
import Animated, { FadeInRight } from "react-native-reanimated";
import { router } from "expo-router";
import { tw } from "../lib/tailwind";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={tw`flex-1 bg-white`}>
      <Animated.View
        entering={FadeInRight}
        style={[tw`flex-1 flex justify-center items-center`, { width }]}
      >
        <Image
          source={require("../assets/images/onboarding.png")}
          style={tw`w-full h-1/3`}
          resizeMode="cover"
        />

        <View style={tw`p-8`}>
          <Text variant="headlineMedium" style={tw`font-bold text-gray-800`}>
            Discover Amazing Events
          </Text>
          <Text variant="bodyLarge" style={tw`mt-2 text-gray-600 leading-6`}>
            Find and join exciting events happening around you. Connect with
            people who share your interests.
          </Text>

          <View style={tw`mt-8 gap-4`}>
            <Button
              mode="contained"
              onPress={() => router.push("/auth/register")}
              style={tw`rounded-full bg-[#4CAF50]`}
              contentStyle={tw`py-2`}
              labelStyle={tw`text-white font-medium`}
            >
              Бүртгүүлэх
            </Button>
            <Button
              mode="outlined"
              onPress={() => router.push("/auth/login")}
              style={tw`rounded-full border-[#4CAF50]`}
              contentStyle={tw`py-2`}
              textColor="#4CAF50"
            >
              Нэвтрэх
            </Button>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
