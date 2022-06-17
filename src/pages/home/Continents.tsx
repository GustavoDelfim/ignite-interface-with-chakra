import { CenterContainer } from "@/components/CenterContainer"
import { Box, Heading, Text } from "@chakra-ui/react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import styles from "./Continents.module.scss"
import Link from "next/link"

export interface City {
  id: number
  name: string
  images: string[]
}

export interface Continent {
  id: number
  name: string
  wallpaper: string
  description: string
  cities: City[]
}

interface ContinentsProps {
  continents: Continent[]
}

export function Continents ({continents}: ContinentsProps) {
  return (
    <Box as="section" pb={24}>
      <CenterContainer>
        <Heading
          textAlign="center"
          fontSize={["lg", "2xl", "4xl"]}
          fontWeight="500"
          color="gray.700"
        >
          Vamos nessa?<br />
          Então escolha seu continente
        </Heading>

        <Box mt="20">
          <Swiper
            navigation={{}}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
          >
            {continents.map(continent => {
              return (
                <SwiperSlide
                  key={continent.id}
                  className={styles.slide}
                >
                  <Link href={`/continents/${continent.id}`}>
                    <Box
                      w="100%"
                      h="100%"
                      position="absolute"
                      top={0}
                      left={0}
                      bg={`url('${continent.wallpaper}') center center no-repeat`}
                      bgSize="cover"
                      cursor="pointer"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDir="column"
                    >
                      <Box
                        w="100%"
                        h="100%"
                        position="absolute"
                        top={0}
                        left={0}
                        bg="black"
                        opacity={.3}
                      />

                      <Heading
                        position="relative"
                        zIndex={1}
                        color="gray.100"
                        fontSize={["2xl", "3xl", "5xl"]}
                      >
                        {continent.name}
                      </Heading>
                      <Text
                        position="relative"
                        zIndex={1}
                        color="gray.300"
                        fontSize="2xl"
                        fontWeight="700"
                        mt={2}
                      >
                        {continent.description}
                      </Text>
                    </Box>
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Box>
      </CenterContainer>
    </Box>
  )
}

