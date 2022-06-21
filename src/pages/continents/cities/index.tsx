import { CenterContainer } from "@/components/CenterContainer";
import { City as CityInterface } from "@/pages/home/Continents";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { City } from "./City";

interface CitiesProps {
  cities: CityInterface[]
}

export function Cities ({cities = []}: CitiesProps) {
  return (
    <Box mb={10}>
      <CenterContainer>
        <Heading
          color="gray.700"
          fontWeight="500"
          fontSize={["2xl", "2xl", "4xl"]}
        >
          Cidades +100
        </Heading>

        <Flex
          mt={10}
          gap={10}
          display="grid"
          gridTemplateColumns={["repeat(1, 256px)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
          justify="center"
        >
          {cities.map(city => {
            return (
              <Box key={city.id}>
                <City {...city} />
              </Box>
            )
          })}
        </Flex>
      </CenterContainer>
    </Box>
  )
}