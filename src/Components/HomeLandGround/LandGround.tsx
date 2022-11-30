import { Box, Button, Text } from "@chakra-ui/react";
import useWindowDimensions from "../../Common/window";

export const LandGround = () => {
  const theme = {
    landGround__container: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
      height: "640px",
      width: useWindowDimensions().width,
      backgroundColor: "#FFFFFF",
      border: "1px solid black",
    },
    left__landGround__section: {
      backgroundColor: "pink",
      height: "640px",
    },
    right__landGround__section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
      height: "640px",
      backgroundColor: "lightblue",
    } as React.CSSProperties,
    landGround__heading: {
      fontWeight: "700",
      fontSize: "64px",
      lineHeight: "76.8px",
      width: "593px",
      height: "154px",
      margin: "16px 0",
    },
    landGround__description: {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      width: "612px",
      height: "40px",
      margin: "16px 0",
    },
    landGround__button: {
      width: "180px",
      height: "56px",
      backgroundColor: "#F86338",
      color: "#FFFFFF",
      borderRadius: "8px",
      margin: "16px 0",
      gap: "10px",
    },
  };

  return (
    <Box style={theme.landGround__container}>
      <section style={theme.left__landGround__section}></section>

      <section style={theme.right__landGround__section}>
        <Text style={theme.landGround__heading}>
          Your Premium Sound, Unplugged!
        </Text>
        <Text style={theme.landGround__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button style={theme.landGround__button}>Find out More</Button>
      </section>
    </Box>
  );
};
