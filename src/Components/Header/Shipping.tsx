import { Button, Stack } from "@chakra-ui/react";
import { MdOutlinePersonOutline } from "react-icons/md";
import Basket from "../../assets/basket.svg";
import Bell from "../../assets/Bell.svg";
import Heart from "../../assets/Heart.svg";
import { scrollToSection } from "../../Common/window";
interface Props {
  reference: any;
}
export default function Shipping(props: Props) {
  const { reference } = props;
  const theme = {
    person__icon: {
      width: "34px",
      height: "40px",
      color: "#000",
      fontSize: "40px",
      fill: "#000",
      fontWeight: "bold",
    },
  };

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={20}
    >
      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
      >
        <img src={Heart} alt="Heart-icon-svg" />
      </Button>

      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
      >
        <img src={Basket} alt="Basket-icon-svg" />
      </Button>

      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
        width={"20px"}
        height={"20px"}
        onClick={() => scrollToSection(reference)}
      >
        <MdOutlinePersonOutline style={theme.person__icon} />
      </Button>

      <Button
        display={{ base: "none", md: "inline-flex" }}
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
        width={"20px"}
        height={"20px"}
        _hover={
          {
            //   bg: "pink.300",
          }
        }
      >
        <img src={Bell} alt="Bell-icon-svg" />
      </Button>
    </Stack>
  );
}
