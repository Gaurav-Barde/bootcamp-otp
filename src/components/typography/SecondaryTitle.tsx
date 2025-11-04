import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { TypographyPropsType } from "../../types/types";
import { scale } from "../../utils/responsive";
import { colors } from "../../theme/colors";

const SecondaryTitle: FC<TypographyPropsType> = ({ text, ...props }) => {
  return (
    <View {...props}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SecondaryTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(16),
    fontWeight: "700",
    color: colors.textPrimary,
  },
});
