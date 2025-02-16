import { useRef, useState } from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { Text, Button, IconButton } from "react-native-paper";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { tw } from "../../lib/tailwind";

export default function VerifyScreen() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<RNTextInput[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto focus next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    // Go back when deleting
    if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center p-4`}>
        <IconButton icon="arrow-left" size={24} onPress={() => router.back()} />
        <Text variant="titleMedium" style={tw`flex-1 text-center -ml-12`}>
          Баталгаажуулах
        </Text>
      </View>

      <View style={tw`px-6 mt-4`}>
        <Animated.View entering={FadeIn} style={tw`gap-2`}>
          <Text variant="headlineSmall" style={tw`font-bold text-gray-800`}>
            Баталгаажуулах код
          </Text>
          <Text variant="bodyMedium" style={tw`text-gray-600 mb-8`}>
            Таны утсанд илгээсэн 4 оронтой кодыг оруулна уу
          </Text>

          <View style={tw`flex-row justify-between mb-8`}>
            {[0, 1, 2, 3].map((i) => (
              <RNTextInput
                key={i}
                ref={(ref) => ref && (inputRefs.current[i] = ref)}
                style={tw`w-16 h-16 text-center text-2xl font-bold bg-gray-50 rounded-2xl border-2 border-gray-200`}
                maxLength={1}
                keyboardType="number-pad"
                value={code[i]}
                onChangeText={(text) => handleCodeChange(text, i)}
                autoFocus={i === 0}
              />
            ))}
          </View>

          <Text style={tw`text-center text-gray-600 mb-2`}>
            Код ирээгүй бол
          </Text>
          <Button
            mode="text"
            onPress={() => {}}
            textColor="#4CAF50"
            labelStyle={tw`font-medium`}
          >
            Дахин илгээх
          </Button>
        </Animated.View>
      </View>

      {/* Bottom Button */}
      <View style={tw`p-6 bg-white border-t border-gray-100 mt-auto`}>
        <Button
          mode="contained"
          onPress={() => router.replace("/(tabs)")}
          style={tw`rounded-full bg-[#4CAF50]`}
          contentStyle={tw`h-12`}
          labelStyle={tw`text-white font-medium text-base`}
        >
          Баталгаажуулах
        </Button>
      </View>
    </View>
  );
}
