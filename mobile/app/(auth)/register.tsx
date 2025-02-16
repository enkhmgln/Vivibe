import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { FormInput } from "../../components/FormInput";
import { useAuthStore } from "../../store/auth";

export default function Register() {
  const signUp = useAuthStore((state) => state.signUp);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await signUp(email, password, fullName);
      router.replace("/(tabs)");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Create Account
      </Text>

      <FormInput
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        error={error}
      />

      <FormInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={error}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={error}
      />

      <Button
        mode="contained"
        onPress={handleRegister}
        loading={loading}
        style={styles.button}
      >
        Sign Up
      </Button>

      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <Link href="/(auth)/login">
          <Text style={styles.link}>Login</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    marginTop: 16,
  },
  footer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    color: "#2196F3",
  },
});
