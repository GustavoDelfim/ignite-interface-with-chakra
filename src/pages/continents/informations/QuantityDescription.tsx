import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface QuantityDescriptionProps {
  children: ReactNode
}

export function QuantityDescription ({ children }: QuantityDescriptionProps) {
  return (
    <Text
      color="gray.700"
      fontWeight={["normal", "normal", 700]}
      fontSize={[18, 18, 24]}
      mt={-2}
      display="flex"
      alignItems="center"
      justifyContent={["left", "left", "center"]}
    >
      {children}
    </Text>
  )
}