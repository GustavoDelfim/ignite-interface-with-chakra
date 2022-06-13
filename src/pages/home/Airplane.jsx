import { chakra, Image } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

const ChakraMotion = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children'
})

export function Airplane () {
  return (
    <>
      <ChakraMotion
        animate={{
          top: [10, 0, 10],  
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        position="absolute"
        right={0}
        top={0}
        ml="auto"
      >
        <Image
          src="/airplane.png"
          alt="Airplane"
          maxW="100%"
        />
      </ChakraMotion>
      <ChakraMotion
        animate={{
          top: [0, 10, 0],  
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        position="absolute"
        right={0}
        top={0}
        ml="auto"
      >
        <Image
          src="/clouds.png"
          alt="Airplane"
          maxW="100%"
        />
      </ChakraMotion>
    </>
  )
}