import { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button, IconButton } from "react-native-paper";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { tw } from "../../lib/tailwind";

export default function LoginScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <IconButton icon="arrow-left" size={24} onPress={() => router.back()} />
      </View>

      <View style={tw`px-6`}>
        <Animated.View entering={FadeIn} style={tw`gap-2`}>
          <Text variant="headlineLarge" style={tw`font-bold text-gray-900`}>
            Нэвтрэх
          </Text>
          <Text variant="bodyLarge" style={tw`text-gray-600 mb-8`}>
            И-мэйл болон нууц үгээ оруулна уу
          </Text>

          <View style={tw`gap-4`}>
            <View>
              <Text variant="bodyMedium" style={tw`text-gray-600 mb-2`}>
                И-мэйл
              </Text>
              <TextInput
                mode="outlined"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
                style={tw`bg-white`}
                outlineStyle={tw`border-gray-300 rounded-xl`}
                contentStyle={tw`h-14`}
                right={
                  form.email ? (
                    <TextInput.Icon
                      icon="close"
                      onPress={() => setForm({ ...form, email: "" })}
                    />
                  ) : null
                }
              />
            </View>

            <View>
              <Text variant="bodyMedium" style={tw`text-gray-600 mb-2`}>
                Нууц үг
              </Text>
              <TextInput
                mode="outlined"
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
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
          </View>

          <Button
            mode="text"
            onPress={() => router.push("/auth/forgot-password")}
            textColor="#4CAF50"
            style={tw`self-center mt-2`}
          >
            Нууц үг мартсан?
          </Button>
        </Animated.View>
      </View>

      <View style={tw`p-6 mt-auto`}>
        <Button
          mode="contained"
          onPress={() => router.replace("/(tabs)")}
          style={tw`rounded-full bg-[#4CAF50]`}
          contentStyle={tw`h-12`}
          labelStyle={tw`text-white font-medium text-base`}
        >
          Нэвтрэх
        </Button>

        <View style={tw`flex-row justify-center items-center mt-6`}>
          <Text variant="bodyMedium" style={tw`text-gray-600`}>
            Бүртгэл байхгүй юу?{" "}
          </Text>
          <Button
            mode="text"
            onPress={() => router.push("/auth/register")}
            textColor="#4CAF50"
            style={tw`m-0 p-0`}
          >
            Бүртгүүлэх
          </Button>
        </View>
      </View>
    </View>
  );
}
