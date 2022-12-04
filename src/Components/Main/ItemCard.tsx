import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react";
import { Product } from "../../Common/types";
import { useRootState } from "../../stores/RootStateContextValue";

interface Props {
  product: Product;
}
export const ItemCard = observer((props: Props) => {
  const cartStore = useRootState().cartStore;
  const { title, category, image } = props.product;
  const addProductToCart = (product: Product) => {
    cartStore.addCartProduct(product);
    // console.log("addProductToCart-product: ", product);
  };
  const theme = {
    card: {
      width: "100%",
      margin: " 0 auto",
      borderRadius: "4px",
    },
    cardImage: {
      width: "100%",
      height: "400px",
      //   objectFit: "cover",
      borderRadius: "4px",
    },
    CardContent: {
      width: "100%",
      height: "100px",
    },
    cardAction: {
      marginTop: "20px",
      width: 40,
      height: 40,
    },
  };

  return (
    <Card>
      <CardBody sx={theme.card}>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          style={theme.cardImage}
        />
        <Stack mt="6" spacing="3">
          <div style={theme.CardContent}>
            <Text>{category}</Text>
            <Heading size="md">{title}</Heading>
          </div>

          <Button
            color="#FFFFFF"
            fontSize="2xl"
            width="40px"
            height="40px"
            borderRadius="50%"
            backgroundColor="#F86338"
            style={theme.cardAction}
            onClick={() => addProductToCart(props.product)}
          >
            <ArrowForwardIcon />
          </Button>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
});
