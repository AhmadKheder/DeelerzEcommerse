import { Box, Button } from "@chakra-ui/react";
// import { observer } from "mobx-react";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../Common/types";
import useWindowDimensions from "../../Common/window";
import { useRootState } from "../../stores/RootStateContextValue";
import ItemCard from "./ItemCard";

// @observer['productsStore']
export default function PremiumCollection() {
  const productsStore = useRootState().productsStore;

  // const productsStoreInstanceContext = createContext(new ProductsSdtore());
  const { products } = productsStore;
  useContext(productsStore.fetchProducts());
  // console.log("productsStore???sad?", productsStore.products);
  // console.log("productsStore???sad?1111", productsStore1.products);

  const [productsList, setProductsList] = useState<Product[] | null>(products);

  // const productDATA = productsStore.fetchProducts();

  const [shownProducts, setShownProducts] = useState<Product[] | null>(null);
  const [url, setUrl] = useState<string>("https://fakestoreapi.com/products");

  const { height, width } = useWindowDimensions();

  const theme = {
    collectionTitleContaner: {
      display: "flex",
      justifyContent: "center",
    },
    collectionTitle: {
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
  }, []);
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <section>
        <div style={theme.collectionTitleContaner}>
          <p style={theme.collectionTitle}>Our Premium Collection</p>
        </div>
        <div style={theme.filteringBtnsContaner}>
          <Button
            color="inherit"
            onClick={() => {
              filterByCategoryHandler("all");
            }}
          >
            All Products
          </Button>

          <Button
            color="inherit"
            onClick={() => filterByCategoryHandler("men's clothing")}
          >
            men's clothing
          </Button>
          <Button
            color="inherit"
            onClick={() => filterByCategoryHandler("jewelry")}
          >
            jewelry
          </Button>
          <Button
            color="inherit"
            onClick={() => filterByCategoryHandler("electronics")}
          >
            electronics
          </Button>
          <Button
            color="inherit"
            onClick={() => filterByCategoryHandler("women's clothing")}
          >
            women's clothing
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setUrl("https://fakestoreapi.com/products?sort=desc");
              getSortedProductsHandler();
            }}
          >
            Sort
          </Button>
        </div>
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
}
