import { CenterContainer } from "@/components/CenterContainer";
import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";

export function Topics () {
  return (
    <Box as="section" py={[10, 10, 20]}>
      <CenterContainer>
        <Flex direction={["column", "row"]} justifyContent="space-between">
          <Box mb={[4, 0]} flex={1}>
            <Flex as="span" h={85} alignItems="center">
              <Center flex={1} px={[10, 4, 0]}><Img src="/cocktail-icon.png" /></Center>
            </Flex>
            <Text color="gray.700" mt="4" fontWeight="700" fontSize={[16, 16, 24]} textAlign="center">vida noturna</Text>
          </Box>
          <Box mb={[4, 0]} flex={1}>
            <Flex as="span" h={85} alignItems="center">
              <Center flex={1} px={[10, 4, 0]}><Img src="/beach-icon.png" /></Center>
            </Flex>
            <Text color="gray.700" mt="4" fontWeight="700" fontSize={[16, 16, 24]} textAlign="center">praia</Text>
          </Box>
          <Box mb={[4, 0]} flex={1}>
            <Flex as="span" h={85} alignItems="center">
              <Center flex={1} px={[10, 4, 0]}><Img src="/building-icon.png" /></Center>
            </Flex>
            <Text color="gray.700" mt="4" fontWeight="700" fontSize={[16, 16, 24]} textAlign="center">moderno</Text>
          </Box>
          <Box mb={[4, 0]} flex={1}>
            <Flex as="span" h={85} alignItems="center">
              <Center flex={1} px={[10, 4, 0]}><Img src="/classic-icon.png" /></Center>
            </Flex>
            <Text color="gray.700" mt="4" fontWeight="700" fontSize={[16, 16, 24]} textAlign="center">clássico</Text>
          </Box>
          <Box mb={[4, 0]} flex={1}>
            <Flex as="span" h={85} alignItems="center">
              <Center flex={1} px={[10, 4, 0]}><Img src="/earth-icon.png" /></Center>
            </Flex>
            <Text color="gray.700" mt="4" fontWeight="700" fontSize={[16, 16, 24]} textAlign="center">e mais...</Text>
          </Box>
        </Flex>
      </CenterContainer>

      <Box textAlign="center" mt={[8, 8, 14]}>
        <Box
          as="span"
          w={90}
          h="1px"
          bg="gray.700"
          display="inline-block"
        />
      </Box>
    </Box>
  )
}