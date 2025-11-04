import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { TypographyPropsType } from "../../types/types";
import { moderateScale, verticalScale } from "../../utils/responsive";
import { colors } from "../../theme/colors";

const BodyText: FC<TypographyPropsType> = ({ text, ...props }) => {
  return (
    <View {...props}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(18),
    fontWeight: "400",
    lineHeight: verticalScale(22),
    color: colors.textSecondary,
  },
});
