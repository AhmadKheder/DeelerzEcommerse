import { Box, Input } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useRootState } from "../../stores/RootStateContextValue";
export const SearchBox = observer(() => {
  const productsStore = useRootState().productsStore;

  return (
    <Box>
      <Input
        placeholder="Basic usage"
        _focusVisible={{
          borderColor: "white",
          boxShadow: "none",
          outline: "none",
          border: "none",
        }}
        bg="#FFFFFF"
        onChange={(e) =>
          productsStore.products.map((item) => {
            item.title
              .toLocaleLowerCase()
              .includes(e.target.value.toLocaleLowerCase())
              ? console.log(item.title, "Exists")
              : console.log("Does not exist");
          })
        }
      />
    </Box>
  );
});
