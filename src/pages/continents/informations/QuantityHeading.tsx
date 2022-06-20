import { Heading } from "@chakra-ui/react"

interface QuantityHeadingProps {
  text: string
}

export function QuantityHeading ({ text }: QuantityHeadingProps) {
  return (
    <Heading
      fontSize={[32, 32, 48]}
      fontWeight={600}
      color="yellow.400"
    >
      {text}
    </Heading>
  )
}