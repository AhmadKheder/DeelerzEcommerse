import { Box, Button, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Product } from "../../Common/types";
import useWindowDimensions from "../../Common/window";
import { useRootState } from "../../stores/RootStateContextValue";
import { ItemCard } from "./ItemCard";
// import ItemCard from "./ItemCard";

export const PremiumCollection = observer(() => {
  const productsStore = useRootState().productsStore;
  const { products } = productsStore;

  const [productsList, setProductsList] = useState<Product[] | null>(products);

  const [shownProducts, setShownProducts] = useState<Product[] | null>(
    productsList
  );

  const { height, width } = useWindowDimensions();

  const filterByCategoryHandler = (category: string) => {
    if (category === "all") {
      setShownProducts(productsList);
    } else {
      let productsLst: Product[] | null = products
        ? products.filter((item) => {
            return item.category === category;
          })
        : null;
      setShownProducts(productsLst);
    }
  };
  const getSortedProductsHandler = () => {
    setProductsList(products);
    setShownProducts(products);
  };
  useEffect(() => {
    setProductsList(products);
    setShownProducts(products);
  }, [products, productsList]);

  const theme = {
    collectionTitleContaner: {
      display: "flex",
      justifyContent: "center",
    },
    collectionTitle: {
      display: "flex",
      alignSelf: "center",
      width: "561px",
      height: "58px",
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "48px",
      lineHeight: "120%",
      letterSpacing: "0.005em",
      color: "#11142D",
    },
    filteringBtnsContaner: {
      display: "flex",
      justifyContent: "center",
    },
    ItemsContainer: {
      display: "grid",
      gridTemplateColumns: "400px 400px 400px",
      gridTemplateRows: "672px 672px",
      gap: "16px 16px",
      justifyContent: "center",
      margin: "24px auto",
    },
    SingleItemContainer: {},
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        // width: "100%",
        // maxWidth: "1000px",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <p style={theme.collectionTitle}>Our Premium Collection</p>
      <section>
        <Flex justify={"space-between"} width={"1200px"}>
          <Button
            variant="link"
            onClick={() => {
              filterByCategoryHandler("all");
            }}
            mr={18}
          >
            All Products
          </Button>
          {/* <Spacer /> */}
          <Button
            variant="link"
            onClick={() => filterByCategoryHandler("men's clothing")}
            mr={18}
          >
            men's clothing
          </Button>
          {/* <Spacer /> */}

          <Button
            variant="link"
            onClick={() => filterByCategoryHandler("jewelry")}
            mr={18}
          >
            jewelry
          </Button>
          {/* <Spacer /> */}

          <Button
            variant="link"
            onClick={() => filterByCategoryHandler("electronics")}
            mr={18}
          >
            electronics
          </Button>
          {/* <Spacer /> */}

          <Button
            variant="link"
            onClick={() => filterByCategoryHandler("women's clothing")}
            mr={18}
          >
            women's clothing
          </Button>
          {/* <Spacer /> */}

          <Button
            variant="link"
            onClick={() => {
              // setUrl("c");
              getSortedProductsHandler();
            }}
            mr={18}
          >
            Sort
          </Button>
        </Flex>
      </section>

      <section style={theme.ItemsContainer}>
        {shownProducts ? (
          shownProducts.map((item) => {
            return <ItemCard key={item.id} product={item} />;
          })
        ) : (
          <h1>No Products</h1>
        )}
      </section>
    </Box>
  );
});
