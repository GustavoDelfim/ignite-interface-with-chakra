import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import { useSliderContinents } from "./SliderContinentsProvider";

interface PaginationProps {
  dotsLength: number
}

export function Pagination ({dotsLength}: PaginationProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  const {index, setIndex} = useSliderContinents()
  const slide = useSwiper()
  
  function go (index: number) {
    slide.slideTo(index)
    setIndex(index)
  }
  
  return (
    <Flex
      width="100%"
      h={1}
      position="absolute"
      bottom={isMobile ? "20px" : "30px"}
      left={0}
      justify="center"
      zIndex={1}
      gap={2}
    >
      {[1, 2, 3].map((_, key) => {
        return (
          <Box
            key={key}
            w={isMobile ? "10px" : "16px"}
            h={isMobile ? "10px" : "16px"}
            bg={index == key ? "orange" : "gray"}
            borderRadius="50%"
            display="inline-block"
            cursor="pointer"
            onClick={() => go(key)}
          />
        )
      })}
    </Flex>
  )
}