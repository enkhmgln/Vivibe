import { useState } from "react";
import { View, ScrollView, Image, Pressable } from "react-native";
import {
  Text,
  TextInput,
  Button,
  HelperText,
  IconButton,
} from "react-native-paper";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tw } from "../../lib/tailwind";

export default function RegisterScreen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validateStep = () => {
    const newErrors: Partial<typeof form> = {};

    if (step === 1) {
      if (!form.fullName) newErrors.fullName = "Full name is required";
      if (!form.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(form.email))
        newErrors.email = "Email is invalid";
    }

    if (step === 2) {
      if (!form.password) newErrors.password = "Password is required";
      else if (form.password.length < 8)
        newErrors.password = "Password must be at least 8 characters";

      if (form.password !== form.confirmPassword)
        newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center p-4`}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => {
            if (step > 1) setStep(step - 1);
            else router.back();
          }}
        />
        <Text variant="titleMedium" style={tw`flex-1 text-center -ml-12`}>
          {step === 1
            ? "Бүртгүүлэх"
            : step === 2
            ? "Нууц үг"
            : "Баталгаажуулах"}
        </Text>
      </View>

      {/* Progress Steps */}
      <View style={tw`flex-row px-8 py-4`}>
        {[1, 2, 3].map((s) => (
          <View key={s} style={tw`flex-1 flex-row items-center`}>
            <View
              style={tw`w-8 h-8 rounded-full items-center justify-center ${
                s <= step ? "bg-[#4CAF50]" : "bg-gray-200"
              }`}
            >
              <Text style={tw`text-white font-medium`}>{s}</Text>
            </View>
            {s < 3 && (
              <View
                style={tw`flex-1 h-1 ${
                  s < step ? "bg-[#4CAF50]" : "bg-gray-200"
                }`}
              />
            )}
          </View>
        ))}
      </View>

      <ScrollView style={tw`flex-1 px-6`}>
        <Animated.View entering={FadeIn} style={tw`gap-6`}>
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <>
              <View style={tw`gap-1`}>
                <Text
                  variant="headlineSmall"
                  style={tw`font-bold text-gray-800`}
                >
                  Хувийн мэдээлэл
                </Text>
                <Text variant="bodyMedium" style={tw`text-gray-600`}>
                  Та өөрийн мэдээллээ оруулна уу
                </Text>
              </View>

              <View style={tw`gap-4`}>
                <TextInput
                  mode="outlined"
                  label="Овог, нэр"
                  value={form.fullName}
                  onChangeText={(text) => setForm({ ...form, fullName: text })}
                  style={tw`bg-white`}
                  outlineStyle={tw`border-gray-300`}
                  contentStyle={tw`h-14`}
                />
                <TextInput
                  mode="outlined"
                  label="И-мэйл"
                  value={form.email}
                  onChangeText={(text) => setForm({ ...form, email: text })}
                  keyboardType="email-address"
                  style={tw`bg-white`}
                  outlineStyle={tw`border-gray-300`}
                  contentStyle={tw`h-14`}
                />
              </View>
            </>
          )}

          {/* Step 2: Password */}
          {step === 2 && (
            <>
              <View style={tw`gap-1`}>
                <Text
                  variant="headlineSmall"
                  style={tw`font-bold text-gray-800`}
                >
                  Нууц үг
                </Text>
                <Text variant="bodyMedium" style={tw`text-gray-600`}>
                  Нууц үгээ оруулна уу
                </Text>
              </View>

              <View style={tw`gap-4`}>
                <TextInput
                  mode="outlined"
                  label="Нууц үг"
                  value={form.password}
                  onChangeText={(text) => setForm({ ...form, password: text })}
                  secureTextEntry
                  style={tw`bg-white`}
                  outlineStyle={tw`border-gray-300`}
                  contentStyle={tw`h-14`}
                  right={<TextInput.Icon icon="eye" />}
                />
                <TextInput
                  mode="outlined"
                  label="Нууц үг давтах"
                  value={form.confirmPassword}
                  onChangeText={(text) =>
                    setForm({ ...form, confirmPassword: text })
                  }
                  secureTextEntry
                  style={tw`bg-white`}
                  outlineStyle={tw`border-gray-300`}
                  contentStyle={tw`h-14`}
                  right={<TextInput.Icon icon="eye" />}
                />
              </View>
            </>
          )}

          {/* Step 3: Phone */}
          {step === 3 && (
            <>
              <View style={tw`gap-1`}>
                <Text
                  variant="headlineSmall"
                  style={tw`font-bold text-gray-800`}
                >
                  Утасны дугаар
                </Text>
                <Text variant="bodyMedium" style={tw`text-gray-600`}>
                  Утасны дугаараа оруулна уу
                </Text>
              </View>

              <TextInput
                mode="outlined"
                label="Утасны дугаар"
                value={form.phone}
                onChangeText={(text) => setForm({ ...form, phone: text })}
                keyboardType="phone-pad"
                style={tw`bg-white`}
                outlineStyle={tw`border-gray-300`}
                contentStyle={tw`h-14`}
              />
            </>
          )}
        </Animated.View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={tw`p-6 bg-white border-t border-gray-100`}>
        <Button
          mode="contained"
          onPress={() => {
            if (step < 3) setStep(step + 1);
            else router.push("/auth/verify");
          }}
          style={tw`rounded-full bg-[#4CAF50]`}
          contentStyle={tw`h-12`}
          labelStyle={tw`text-white font-medium text-base`}
        >
          {step < 3 ? "Дараах" : "Бүртгүүлэх"}
        </Button>
      </View>
    </View>
  );
}
