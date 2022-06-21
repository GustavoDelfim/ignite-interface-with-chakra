import { CenterContainer } from "@/components/CenterContainer";
import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";

interface TopicProps {
  image: string
  description: string
}

function Topic ({description, image}: TopicProps) {
  return (
    <Box
      w={["50%", "auto"]}
      display={["inline-block", "block"]}
      mb={[4, 0]}
      flex={["", 1]}
    >
      <Flex
        as="span"
        h={85}
        alignItems="center"
        display={["none", "flex"]}
      >
        <Center flex={1} px={[10, 4, 0]}><Img src={image} /></Center>
      </Flex>

      <Box
        as="span"
        w="8px"
        h="8px"
        bg="yellow.400"
        display={["inline-block", "none"]}
        borderRadius="50%"
        mr="10px"
      />
      <Text
        color="gray.700"
        mt="4"
        fontWeight={["600", "700"]}
        fontSize={[18, 18, 24]}
        textAlign="center"
        display={["inline-block", "block"]}
      >
        {description}
      </Text>
    </Box>
  )
}

export function Topics () {
  return (
    <Box as="section" py={[10, 10, 20]}>
      <CenterContainer>
        <Flex
          justify={["center", "space-between"]}
          display={["block", "flex"]}
          textAlign="center"
        >
          <Topic description="vida noturna" image="/cocktail-icon.png" />
          <Topic description="praia" image="/beach-icon.png" />
          <Topic description="moderno" image="/building-icon.png" />
          <Topic description="clássico" image="/classic-icon.png" />
          <Topic description="e mais..." image="/earth-icon.png" />
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