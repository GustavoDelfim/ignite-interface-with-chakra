import { Box } from "@chakra-ui/react";

interface CityProps {
  images: string[]
}

export function City ({images}: CityProps) {
  return (
    <Box
      w="25%"
      borderRadius="base"
    >
      <Box
        w="100%"
        h={173}
        bg={`url('${images[0]}') center center no-repeat`}
        bgSize="cover"
        borderTopLeftRadius="base"
        borderTopRightRadius="base"
      />
      <Box
        border="solid 1px"
        borderColor="yellow.400"
        borderTop="none"
        borderBottomLeftRadius="base"
        borderBottomRightRadius="base"
        bg="white"
      >
        Text
      </Box>
    </Box>
  )
}