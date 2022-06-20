import { CenterContainer } from "@/components/CenterContainer";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { QuantityDescription } from "./QuantityDescription";
import { QuantityHeading } from "./QuantityHeading";
import { RiInformationLine } from "react-icons/ri"

export function Informations () {
  return (
    <Box my={[10, 10, 24]}>
      <CenterContainer>
        <Flex gap={[6, 6, 10]} direction={["column", "column", "column", "row"]}>
          <Text
            flex={1}
            fontSize={[18, 18, 24]}
            fontWeight="normal"
            color="gray.700"
            textAlign="justify"
          >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
            a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
            o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex flex={1} alignItems="center" justifyContent="space-between">
            <Box flex={["initial", "initial", 1]} textAlign={["left", "left", "center"]}>
              <QuantityHeading text="50" />
              <QuantityDescription>
                países
              </QuantityDescription>
            </Box>
            <Box flex={["initial", "initial", 1]} textAlign={["left", "left", "center"]}>
              <QuantityHeading text="60" />
              <QuantityDescription>
                linguas
              </QuantityDescription>
            </Box>
            <Box flex={["initial", "initial", 1]} textAlign={["left", "left", "center"]} flexBasis="content">
              <QuantityHeading text="27" />
              <QuantityDescription>
                cidades +100

                <Tooltip hasArrow label='Search places' bg='gray.700' color='gray.100'>
                  <Box as="span" ml={1} color="gray.400" fontSize={[17, 17, 20]}><RiInformationLine /></Box>
                </Tooltip>
              </QuantityDescription>
            </Box>
          </Flex>
        </Flex>
      </CenterContainer>
    </Box>
  )
}