import { Box, Text } from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
export default function CallCenter() {
  const theme = {
    callCenter: {
      display: "flex",
      alignItems: "center",
      marginLeft: "20px",
    },
    callCenter__icon: {
      fontSize: "16px",
      margin: "0 8px",
    },
    callCenter__text: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      margin: "0 8px",
    },
  };
  return (
    <Box style={theme.callCenter}>
      <BsTelephone style={theme.callCenter__icon} />
      <Text style={theme.callCenter__text}>Call Center</Text>
    </Box>
  );
}
