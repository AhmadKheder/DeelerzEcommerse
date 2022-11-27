import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";

export default function CallCenter() {
  return (
    <Box>
      <div className={"test"}>
        <div className={"test1"}>
          <Icon as={PhoneIcon} />
        </div>
        <div>
          <Box boxSize="sm" w="86px" h="19px">
            Call Center
          </Box>
        </div>
      </div>
    </Box>
  );
}
