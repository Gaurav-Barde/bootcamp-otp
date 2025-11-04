// src/components/OtpInput.tsx
import React, { FC, useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputKeyPressEvent,
} from "react-native";
import { scale, verticalScale } from "../utils/responsive";
import { colors } from "../theme/colors";

interface OtpInputProps {
  length?: number;
  onChangeCode?: (code: string) => void;
}

export const OtpInput: FC<OtpInputProps> = ({ length = 4, onChangeCode }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
    onChangeCode?.(newOtp.join(""));
  };

  const handleKeyPress = (e: TextInputKeyPressEvent, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, i) => (
        <TextInput
          key={i}
          ref={(ref) => {
            if (ref) inputs.current[i] = ref;
          }}
          style={[styles.input, otp[i] ? styles.filled : null]}
          keyboardType="number-pad"
          maxLength={1}
          value={otp[i]}
          onChangeText={(text) => handleChange(text, i)}
          onKeyPress={(e) => handleKeyPress(e, i)}
          textAlign="center"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(30),
  },
  input: {
    width: scale(50),
    height: verticalScale(55),
    borderWidth: scale(1.5),
    borderColor: colors.textSecondary,
    borderRadius: 8,
    fontSize: scale(22),
    fontWeight: "700",
    color: colors.textPrimary,
    backgroundColor: colors.background,
  },
  filled: {
    borderColor: colors.secondary,
  },
});
