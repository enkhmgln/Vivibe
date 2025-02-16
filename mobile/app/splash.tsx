import { View, Image } from "react-native";
import { Text } from "react-native-paper";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useEffect } from "react";
import { router } from "expo-router";
import { tw } from "../lib/tailwind";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Animated.View entering={FadeIn.delay(200)} style={tw`items-center`}>
        <Image
          source={require("../assets/images/logo.png")}
          style={tw`w-24 h-24`}
        />
        <Animated.View entering={FadeInDown.delay(600)}>
          <Text
            variant="headlineLarge"
            style={tw`mt-4 font-bold text-gray-800`}
          >
            Vivibe
          </Text>
          <Text variant="bodyLarge" style={tw`text-center mt-2 text-gray-500`}>
            Events, Lifestyle and experiences
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
