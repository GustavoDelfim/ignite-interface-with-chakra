import { Box, Button, IconButton, Image } from "@chakra-ui/react";
import { CenterContainer } from "./CenterContainer";
import { MdOutlineArrowBackIosNew } from "react-icons/md"

interface HeaderProps {
  isBack?: boolean
}

export function Header ({ isBack = false }: HeaderProps) {
  return (
    <Box bg="white">
      <CenterContainer>
        <Box
          h="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          {isBack &&
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              display="flex"
              alignItems="center"
            >
              <IconButton
                aria-label="Back"
                icon={<MdOutlineArrowBackIosNew size="20" />}
                bg="transparent"
                color="gray.700"
              />
            </Box>
          }
          <Image src="/logo.png" alt="Worldtip" maxW="184px" mx="auto" />
        </Box>
      </CenterContainer>
    </Box>
  )
}