import { useState } from "react";
import { View } from "react-native";
import {
  Text,
  TextInput,
  Button,
  IconButton,
  Surface,
} from "react-native-paper";
import { router } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOutUp,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tw } from "../../lib/tailwind";

export default function ResetPasswordScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleReset = () => {
    setShowSuccess(true);
    setTimeout(() => {
      router.replace("/auth/login");
    }, 2000);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {showSuccess && (
        <Animated.View
          entering={FadeInDown}
          exiting={FadeOutUp}
          style={tw`absolute top-0 left-0 right-0 z-50`}
        >
          <Surface style={tw`flex-row items-center p-4 bg-[#4CAF50]`}>
            <MaterialCommunityIcons
              name="check-circle"
              size={24}
              color="white"
            />
            <Text style={tw`ml-2 text-white font-medium`}>
              Нууц үг амжилттай шинэчлэгдлээ
            </Text>
          </Surface>
        </Animated.View>
      )}

      <View style={tw`p-4`}>
        <IconButton icon="arrow-left" size={24} onPress={() => router.back()} />
      </View>

      <View style={tw`px-6`}>
        <Animated.View entering={FadeIn} style={tw`gap-2`}>
          <Text variant="headlineLarge" style={tw`font-bold text-gray-900`}>
            Шинэ нууц үг
          </Text>
          <Text variant="bodyLarge" style={tw`text-gray-600 mb-8`}>
            Шинэ нууц үгээ оруулна уу
          </Text>

          <View style={tw`gap-4`}>
            <View>
              <Text variant="bodyMedium" style={tw`text-gray-600 mb-2`}>
                Шинэ нууц үг
              </Text>
              <TextInput
                mode="outlined"
                secureTextEntry={!showPassword}
                style={tw`bg-white`}
                outlineStyle={tw`border-gray-300 rounded-xl`}
                contentStyle={tw`h-14`}
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />
            </View>

            <View>
              <Text variant="bodyMedium" style={tw`text-gray-600 mb-2`}>
                Нууц үг давтах
              </Text>
              <TextInput
                mode="outlined"
                secureTextEntry={!showConfirmPassword}
                style={tw`bg-white`}
                outlineStyle={tw`border-gray-300 rounded-xl`}
                contentStyle={tw`h-14`}
                right={
                  <TextInput.Icon
                    icon={showConfirmPassword ? "eye-off" : "eye"}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                }
              />
            </View>
          </View>
        </Animated.View>
      </View>

      <View style={tw`p-6 mt-auto`}>
        <Button
          mode="contained"
          onPress={handleReset}
          style={tw`rounded-full bg-[#4CAF50]`}
          contentStyle={tw`h-12`}
          labelStyle={tw`text-white font-medium text-base`}
        >
          Хадгалах
        </Button>
      </View>
    </View>
  );
}
