import {
  View,
  StyleSheet,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import PrimaryTitle from "../../components/typography/PrimaryTitle";
import BodyText from "../../components/typography/BodyText";
import SecondaryTitle from "../../components/typography/SecondaryTitle";
import Button from "../../components/Button";
import { scale, verticalScale } from "../../utils/responsive";
import { OtpInput } from "../../components/OtpInput";

type OtpScreenProps = {};

const OTP_LENGTH = 4;

const OtpScreen: FC<OtpScreenProps> = () => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timer > 0) {
      setCanResend(false);
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleVerify = () => {
    Keyboard.dismiss();
    setLoading(true);
    console.log("OTP Code: ", code);
    setTimeout(() => {
      console.log("OTP Submitted Successfully: ", code);
      setLoading(false);
    }, 2000);
  };

  const handleResend = () => {
    if (canResend) {
      console.log("Resend OTP requested");
      setTimer(60);
      setCanResend(false);
    }
  };

  if (loading) {
    return <ActivityIndicator animating={loading} />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <PrimaryTitle text="OTP Verification" style={styles.title} />
        <BodyText text="Enter the verification code we just sent you on" />
        <SecondaryTitle text="bardegaurav09@gmail.com" style={styles.email} />
        <OtpInput onChangeCode={setCode} />
        <Button
          title="Verify"
          disabled={code.length !== OTP_LENGTH}
          onPress={handleVerify}
        />
        <View style={styles.resendContainer}>
          <BodyText
            text={
              canResend
                ? "Didn't receive the code?"
                : `Resend available in ${timer}s`
            }
          />
          <Pressable disabled={!canResend} onPress={handleResend}>
            <SecondaryTitle
              text="Resend"
              style={{ opacity: canResend ? 1 : 0.2 }}
            />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(100),
  },
  title: {
    marginBottom: verticalScale(20),
  },
  email: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
  },
});

export default OtpScreen;
