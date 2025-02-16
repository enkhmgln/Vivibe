import { StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

interface FormInputProps extends Omit<TextInputProps, "error"> {
  error?: string;
}

export function FormInput({ error, style, ...props }: FormInputProps) {
  return (
    <TextInput
      mode="outlined"
      style={[styles.input, style]}
      error={!!error}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginBottom: 16,
  },
});
