import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { FC } from "react";
import { scale, verticalScale } from "../utils/responsive";
import { Colors, colors } from "../theme/colors";

type ButtonPropsType = TouchableOpacityProps & {
  title: string;
  bgColor?: string | Colors["textPrimary"];
  color?: string;
};

const Button: FC<ButtonPropsType> = ({
  title,
  bgColor = colors.secondary,
  color = colors.background,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textPrimary,
    paddingVertical: verticalScale(20),
    borderRadius: "5%",
    marginBottom: verticalScale(30),
  },
  text: {
    fontSize: scale(24),
    color: colors.background,
    fontWeight: "700",
    textAlign: "center",
  },
});
