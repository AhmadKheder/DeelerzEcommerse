import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Product } from "../../Common/types";
import { scrollTop } from "../../Common/window";
import { useRootState } from "../../stores/RootStateContextValue";

import { CartOrderSummary } from "./CartOrderSummery";
import { CartItem } from "./CurrentItem";

export const Cart = observer(() => {
  const cartStore = useRootState().cartStore;
  const [totalItems, setTotalItems] = useState<number>(0);
  const [cartData, setCartData] = useState<Product[] | []>([]);

  useEffect(() => {
    setTotalItems(cartStore.cartProductsQuantity);
    setCartData(cartStore.getCartProducts);
  }, [cartStore.totalCartProducts, cartStore.cartProductsQuantity]);

  const onClickDeleteHandler = (id: number) => {
    cartStore.deleteCartProduct(id);
    console.log("delete from cart id: ", id);
  };
  const onChangeQuantityHandler = (quantity: number) => {
    console.log("quantity: ", quantity);
    console.log("onChangeQuantityHandler");
  };

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({totalItems} items)
          </Heading>

          <Stack spacing="6">
            {cartData.map((product) => (
              <CartItem
                key={product.id}
                id={product.id.toString()}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                // {...product}
                onClickDelete={onClickDeleteHandler}
                onChangeQuantity={onChangeQuantityHandler}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("#F86338", "#F86338")} onClick={scrollTop}>
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
});
