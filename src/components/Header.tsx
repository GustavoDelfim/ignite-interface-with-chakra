import { Box, Button, Image } from "@chakra-ui/react";
import { CenterContainer } from "./CenterContainer";

export function Header () {
  return (
    <Box bg="white">
      <CenterContainer>
        <Box
          h="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button justifySelf="flex-start">asd</Button>
          <Image src="/logo.png" alt="Worldtip" maxW="184px" mx="auto" />
        </Box>
      </CenterContainer>
    </Box>
  )
}