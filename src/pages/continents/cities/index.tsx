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

        <Flex mt={10} gap={10}>
          {cities.map(city => {
            return <City
              key={city.id}
              images={city.images}
            />
          })}
        </Flex>
      </CenterContainer>
    </Box>
  )
}