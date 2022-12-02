import { Box, Button, Image, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import CircledIcon from "../../assets/CircledIcon.svg";
import Ellipse from "../../assets/Ellipse.svg";
import useWindowDimensions from "../../Common/window";

export const LandGround = () => {
  const theme = {
    landGround__container: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
      height: "640px",
      width: useWindowDimensions().width,
      backgroundColor: "#FFFFFF",
    },
    left__landGround__section: {
      height: "640px",
    },
    right__landGround__section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
      height: "640px",
    } as CSSProperties,
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
      color: "#515151",
    },
    landGround__button: {
      width: "180px",
      height: "56px",
      backgroundColor: "#F86338",
      color: "#FFFFFF",
      borderRadius: "8px",
      margin: "20px 0",
      gap: "10px",
    },

    landGround__top__left__ellipse: {
      position: "relative",
      top: "20px",
      left: "68px",
      width: "100px",
      height: "100px",
    } as CSSProperties,
    landGround__bottom__right__ellipse: {
      position: "relative",
      top: "380px",
      left: "640px",
      width: "60px",
      height: "60px",
      rotate: "80deg",
    } as CSSProperties,
    landGround__top__right__ellipse: {
      position: "relative",
      top: "-50px",
      left: "1200px",
      width: "60px",
      height: "60px",
      rotate: "100deg",
    } as CSSProperties,
    landGround__top_circledIcon: {
      position: "relative",
      top: "-100px",
      float: "right",
      marginRight: "100px",
      width: "40px",
      height: "40px",
    } as CSSProperties,
    landGround__bottom__left__circledIcon: {
      position: "relative",
      float: "left",
      width: "10px",
      height: "10px",
      top: "200px",
      left: "100px",
    } as CSSProperties,
    landGround__middle__right__circledIcon: {
      position: "relative",
      float: "right",
      width: "20px",
      height: "20px",
      top: "200px",
      right: "-700px",
    } as CSSProperties,
    landGround__bottom__right__circledIcon: {
      position: "relative",
      float: "right",
      width: "10px",
      height: "10px",
      top: "380px",
      right: "-400px",
    } as CSSProperties,
  };

  return (
    <Box style={theme.landGround__container}>
      <section style={theme.left__landGround__section}>
        <Image
          src={Ellipse}
          style={theme.landGround__top__left__ellipse}
        ></Image>
        <Image
          src={Ellipse}
          style={theme.landGround__bottom__right__ellipse}
        ></Image>
        <Image
          src={Ellipse}
          style={theme.landGround__top__right__ellipse}
        ></Image>
        <Image
          src={CircledIcon}
          style={theme.landGround__top_circledIcon}
        ></Image>
        <Image
          src={CircledIcon}
          style={theme.landGround__bottom__left__circledIcon}
        ></Image>
        <Image
          src={CircledIcon}
          style={theme.landGround__middle__right__circledIcon}
        ></Image>
        <Image
          src={CircledIcon}
          style={theme.landGround__bottom__right__circledIcon}
        ></Image>
      </section>

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
