import { Box, Text } from "@chakra-ui/react";
import { BsTruck } from "react-icons/bs";
export default function ShippingsAndReturns() {
  const theme = {
    shippings: {
      display: "flex",
      alignItems: "center",
      marginLeft: "20px",
    },
    shippings__icon: {
      fontSize: "16px",
      margin: "0 8px",
    },
    shippings__text: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      margin: "0 8px",
    },
  };
  return (
    <Box style={theme.shippings}>
      <BsTruck style={theme.shippings__icon} />
      <Text style={theme.shippings__text}>Shippings & Returns</Text>
    </Box>
  );
}
