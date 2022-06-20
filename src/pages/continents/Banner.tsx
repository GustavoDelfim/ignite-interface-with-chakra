import { CenterContainer } from "@/components/CenterContainer"
import { Box, Flex, Heading } from "@chakra-ui/react"

interface BannerProps {
  title: string
  url: string
}

export function Banner ({title, url}: BannerProps) {
  return (
    <Box
      w="100%"
      bg={`url('${url}') center center no-repeat`}
      bgSize="cover"
      position="relative"
    >
      <Box
        w="100%"
        h="100%"
        position="absolute"
        top={0}
        left={0}
        bg="white"
        opacity={.25}
      />
      
      <Box position="relative" zIndex={1}>
        <CenterContainer>
          <Flex
            alignItems={["center", "center", "end"]}
            justifyContent={["center", "center", "left"]}
            h={[150, 250, 500]}
            pb={[0, 0, 14]}
          >
            <Heading
              color="gray.50"
              fontSize={["2xl", "3xl", "5xl"]}
              fontWeight={600}
            >
              {title}
            </Heading>
          </Flex>
        </CenterContainer>
      </Box>
    </Box>
  )
}