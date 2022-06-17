import { Box, IconButton, Image } from "@chakra-ui/react";
import { CenterContainer } from "./CenterContainer";
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import Link from "next/link";
import { useRouter } from "next/router";

export function Header () {
  const { asPath, back } = useRouter()
  
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
          {asPath !== "/" &&
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
                onClick={back}
              />
            </Box>
          }

          <Link href="/">
            <Image src="/logo.png" alt="Worldtip" maxW="184px" mx="auto" cursor="pointer" />
          </Link>
        </Box>
      </CenterContainer>
    </Box>
  )
}