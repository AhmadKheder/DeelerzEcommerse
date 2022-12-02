import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Shipping } from "../Header/Shipping";
import SearchBox from "./SearchBox";
interface Props {
  reference: any;
}

export default function NavBar(props: Props) {
  const { reference } = props;
  const { isOpen, onToggle } = useDisclosure();
  const theme = {
    nav__text: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#11142D",
      _hover: {
        color: "#000",
      },
      maxWidth: "50px",
      height: "19px",
      cursor: "pointer",
    },
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.800", "gray.800")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        sx={{
          backgroundColor: "#e3e7e8",
          height: "100px",
        }}
        borderColor={useColorModeValue("gray.800", "gray.800")}
        align={"center"}
        justify={{ base: "center", md: "space-between" }}
        padding="0 80px"
      >
        <Text style={theme.nav__text}>Shop</Text>

        <Text style={theme.nav__text}>Promo</Text>
        <Text style={theme.nav__text}>About</Text>
        <Text style={theme.nav__text}>Shop</Text>

        <div style={{ margin: "0 150px 0 0", width: "400px" }}>
          <SearchBox />
        </div>

        <Shipping reference={reference} />
      </Flex>
    </Box>
  );
}
