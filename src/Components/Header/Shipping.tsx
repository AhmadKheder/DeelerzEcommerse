import { Button } from "@chakra-ui/react";
import { IoPersonOutline } from "react-icons/io5";

import { observer } from "mobx-react-lite";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { scrollToSection } from "../../Common/window";
interface Props {
  reference: any;
}
export const Shipping = observer((props: Props) => {
  const { reference } = props;
  const theme = {
    nav__icon: {
      width: "30px",
      height: "30px",
      color: "#000",
    },
  };

  return (
    <>
      <Button variant={"link"}>
        <AiOutlineHeart style={theme.nav__icon} />
      </Button>

      <Button variant={"link"}>
        <IoPersonOutline style={theme.nav__icon} />
      </Button>

      <Button variant={"link"} onClick={() => scrollToSection(reference)}>
        <AiOutlineShoppingCart style={theme.nav__icon} />
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "30px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#F86338",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            fontSize: "12px",

            fontWeight: "bold",
          }}
        >
          3
        </div>
      </Button>

      <Button variant={"link"}>
        <BsBell style={theme.nav__icon} />
      </Button>
    </>
  );
});
