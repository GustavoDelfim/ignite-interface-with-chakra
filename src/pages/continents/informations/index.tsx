import { CenterContainer } from "@/components/CenterContainer";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { QuantityDescription } from "./QuantityDescription";
import { QuantityHeading } from "./QuantityHeading";
import { RiInformationLine } from "react-icons/ri"
import { Article } from "@/pages/home/Continents";

interface InformationsProps extends Article {}

export function Informations ({text, number_cities, number_country, number_language}: InformationsProps) {
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
            {text}
          </Text>
          <Flex flex={1} alignItems="center" justifyContent="space-between">
            <Box flex={["initial", "initial", 1]} textAlign={["left", "left", "center"]}>
              <QuantityHeading text={number_country} />
              <QuantityDescription>
                países
              </QuantityDescription>
            </Box>
            <Box flex={["initial", "initial", 1]} textAlign={["left", "left", "center"]}>
              <QuantityHeading text={number_language} />
              <QuantityDescription>
                linguas
              </QuantityDescription>
            </Box>
            <Box flex={["initial", "initial", 1]} textAlign={["left", "left", "center"]} flexBasis="content">
              <QuantityHeading text={number_cities} />
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