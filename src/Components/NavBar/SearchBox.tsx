import { Box, Input } from "@chakra-ui/react";
export default function SearchBox() {
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
      />
    </Box>
  );
}
