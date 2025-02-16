import { View } from "react-native";
import { Text, TextInput, Button, IconButton } from "react-native-paper";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { tw } from "../../lib/tailwind";

export default function ForgotPasswordScreen() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <IconButton icon="arrow-left" size={24} onPress={() => router.back()} />
      </View>

      <View style={tw`px-6`}>
        <Animated.View entering={FadeIn} style={tw`gap-2`}>
          <Text variant="headlineLarge" style={tw`font-bold text-gray-900`}>
            Нууц үг сэргээх
          </Text>
          <Text variant="bodyLarge" style={tw`text-gray-600 mb-8`}>
            Бүртгэлтэй и-мэйл хаягаа оруулна уу
          </Text>

          <View>
            <Text variant="bodyMedium" style={tw`text-gray-600 mb-2`}>
              И-мэйл
            </Text>
            <TextInput
              mode="outlined"
              style={tw`bg-white`}
              outlineStyle={tw`border-gray-300 rounded-xl`}
              contentStyle={tw`h-14`}
            />
          </View>
        </Animated.View>
      </View>

      <View style={tw`p-6 mt-auto`}>
        <Button
          mode="contained"
          onPress={() => router.push("/auth/reset-password")}
          style={tw`rounded-full bg-[#4CAF50]`}
          contentStyle={tw`h-12`}
          labelStyle={tw`text-white font-medium text-base`}
        >
          Үргэлжлүүлэх
        </Button>
      </View>
    </View>
  );
}
