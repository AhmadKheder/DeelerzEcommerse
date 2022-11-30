import {
  Box,
  CloseButton,
  Flex,
  Input,
  Link,
  SelectProps,
} from "@chakra-ui/react";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRootState } from "../../stores/RootStateContextValue";
import { CartProductMeta } from "./CartProductMeta";

import { PriceTag } from "./PriceTag";
type CartItemProps = {
  //   isGiftWrapping?: boolean;
  id: string;
  title: string;
  description: string;
  quantity?: number;
  price: number;
  currency?: string;
  image: string;
  onChangeQuantity?: (quantity: number) => void;
  //   onClickGiftWrapping?: () => void;
  onClickDelete: (id: number) => void;
};
const theme = {
  quantitySelect: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  math__icons: {
    fontSize: "1.1rem",
    cursor: "pointer",
    margin: "0 1rem",
  },
};
const QuantitySelect = observer((props: SelectProps) => {
  const cartStore = useRootState().cartStore;
  console.log("props :>> ", props);
  const [orderedQuantity, setOrderedQuantity] = useState<number>(1);

  useEffect(() => {
    // setOrderedQuantity(cartStore.orderedProductQuantity(props.id));
  }, []);

  return (
    <Box style={theme.quantitySelect}>
      {/* minus */}
      <AiOutlineMinus
        style={theme.math__icons}
        onClick={() =>
          orderedQuantity > 0 && setOrderedQuantity(orderedQuantity - 1)
        }
      />
      <Input
        htmlSize={1}
        width="auto"
        value={orderedQuantity}
        style={{ textAlign: "center", color: "#F86338" }}
        onChange={(e) => setOrderedQuantity(parseInt(e.target.value))}
      />
      <AiOutlinePlus
        style={theme.math__icons}
        onClick={() => setOrderedQuantity(orderedQuantity + 1)}
      />
      {/* plus */}
    </Box>
  );
});

export const CartItem = (props: CartItemProps) => {
  const {
    // isGiftWrapping,
    id,
    title,
    description,
    quantity,
    image,
    currency = "USD",
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;
  const [requestedQuantity, setQuantity] = useState<number | undefined>(
    quantity
  );
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title}
        description={
          description.indexOf(". ") > -1
            ? description.split(".")[0]
            : description
        }
        image={image}
        // isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect
          value={requestedQuantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          //   onClick={() => onClickDelete(id)
          onClick={() => onClickDelete(+id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
