import { CenterContainer } from "@/components/CenterContainer";
import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { Airplane } from "./Airplane"

export function Banner () {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })
  
  return (
    <Box
      w="100%"
      h={["auto", "250px", "335px"]}
      bg="url('/banner.jpg') center center no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
      py={[8, 8, 0]}
    >
      <CenterContainer>
        <Box
          display="flex"
          gap={4}
        >
          <Box flex={1} pr={50}>
            <Heading
              as="h2"
              color="gray.100"
              fontWeight="500"
              fontSize={["lg", "2xl", "4xl"]}
            >
              5 Continentes,<br /> infinitas possibilidades.
            </Heading>
            <Text
              color="gray.200"
              fontWeight="normal"
              fontSize={20}
              mt={7}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          {!isMobile &&
            <Box
              flex={1}
              position="relative"
            >
              <Airplane />
            </Box>
          }
        </Box>
      </CenterContainer>
    </Box>
  )
}