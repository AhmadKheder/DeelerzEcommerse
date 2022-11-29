import {
    CloseButton,
    Flex,
    Link,
    Select,
    SelectProps,
    useColorModeValue
} from "@chakra-ui/react";
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
  onClickDelete?: (id: number) => void;
};

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props: CartItemProps) => {
  const {
    // isGiftWrapping,
    id,
    title,
    description,
    quantity = 10,
    image,
    currency = "USD",
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;

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
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={(id:number)=>onClickDelete(id)}
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
