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
    >
      <CenterContainer>
        <Flex
          alignItems="end"
          h={[200, 350, 500]}
          pb={14}
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
  )
}