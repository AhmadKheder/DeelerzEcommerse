import { BellIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
export default function Shipping() {
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
        <img
          src="https://webstockreview.net/images/hearts-vector-png-7.png"
          alt="Heart-icon-img"
        />
      </Button>

      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
      >
        <img
          src="https://th.bing.com/th/id/R.2c67d76b91a872592099e6620114b511?rik=Bm3Dc31sb2ky3g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_405324.png&ehk=0H0eTs0SyIlTZiPIVGlfZXXdAKpbkPLlTTQ0N2tHXgw%3d&risl=&pid=ImgRaw&r=0"
          alt="Person-icon-img"
        />
      </Button>

      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
        width={"20px"}
        height={"20px"}
      >
        <img
          src="https://th.bing.com/th/id/R.672ae334c8366021fd588786f054cb2d?rik=5OKBZlZEdbRDrA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_225646.png&ehk=Tjxw1TwcwdV5%2ftOEQVrvqgnbn0XKd%2fweSJ6aBiXxKB0%3d&risl=&pid=ImgRaw&r=0"
          alt="Cart-icon-img"
        />
        Shipping & Returns
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
        <BellIcon />
      </Button>
    </Stack>
  );
}
