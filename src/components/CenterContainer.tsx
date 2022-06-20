import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CenterContainerProps {
  children: ReactNode
}

export function CenterContainer ({children}: CenterContainerProps) {
  return (
    <Box
      w="100%"
      maxW="1240px"
      mx="auto"
      px={[6, 6, 8]}
    >
      {children}
    </Box>
  )
}