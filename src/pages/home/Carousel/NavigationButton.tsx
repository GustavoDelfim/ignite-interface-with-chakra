import { Button, ButtonProps, useBreakpointValue } from "@chakra-ui/react";
import { cloneElement } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useSwiper } from "swiper/react";
import { useSliderContinents } from "./SliderContinentsProvider";

interface NavigationButtonProps {
  direction: "prev" | "next"
}

export function NavigationButton ({direction}: NavigationButtonProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })
  const {setIndex} = useSliderContinents()
  const slide = useSwiper()
  
  const replace: ButtonProps = {}

  let Icon = IoIosArrowBack
  
  if (direction == "next") {
    replace.right = 0
    Icon = IoIosArrowForward
  } else {
    replace.left = 0
  }

  function go () {
    if (direction == "next") {
      slide.slideNext()
    } else {
      slide.slidePrev()
    }

    setIndex(slide.realIndex)
  }
  
  return cloneElement(
    <Button
      w={isMobile ? "50px" : "80px"}
      h={isMobile ? "50px" : "80px"}
      position="absolute"
      top="50%"
      mt={isMobile ? "-25px" : "-40px"}
      zIndex={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="transparent"
      outline="none"
      border="none"
      onClick={go}
      _focus={{
        bg: "transparent",
        outline: "none",
        border: "none"
      }}
      _active={{
        bg: "transparent",
        outline: "none",
        border: "none"
      }}
      _hover={{
        bg: "transparent",
        outline: "none",
        border: "none"
      }}
      p={0}
    >
      <Icon size={isMobile ? 70 : 100} color="orange" />
    </Button>,
    replace
  )
}