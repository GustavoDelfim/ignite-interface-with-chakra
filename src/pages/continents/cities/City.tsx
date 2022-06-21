import { City as CityProps } from "@/pages/home/Continents";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function City ({images, country, name}: CityProps) {
  return (
    <Box w="100%" borderRadius="base">
      <Box
        w="100%"
        h={173}
        bg={`url('${images[0]}') center center no-repeat`}
        bgSize="cover"
        borderTopLeftRadius="base"
        borderTopRightRadius="base"
      />
      <Flex
        border="solid 1px"
        borderColor="yellow.400"
        borderTop="none"
        borderBottomLeftRadius="base"
        borderBottomRightRadius="base"
        bg="white"
        p={6}
        alignItems="center"
        justify="space-between"
      >
        <Box>
          <Text fontSize={20} fontWeight="600" color="gray.700" fontFamily="Barlow">{name}</Text>
          <Text fontSize={16} fontWeight="500" color="gray.400" fontFamily={"Barlow"} mt={1}>{country.name}</Text>
        </Box>
        <Box
          as="span"
          display="flex"
          w="30px"
          h="30px"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          bg={`url('http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.flag}.svg') center center no-repeat`}
          bgSize="cover"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  )
}