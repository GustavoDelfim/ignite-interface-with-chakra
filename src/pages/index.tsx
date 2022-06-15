import { Header } from "@/components/Header";
import { Banner } from "./home/Banner"
import { Continent, Continents } from "./home/Continents";
import { Topics } from "./home/Topics";

interface HomeProps {
  continents: Continent[]
}

export default function Home ({continents}: HomeProps)  {
  return (
    <>
      <Header />
      <Banner />
      <Topics />
      <Continents continents={continents} />
    </>
  )
}

export async function getServerSideProps () {
  try {
    const res = await fetch('http://localhost:3000/api/continents')
    const data = await res.json()

    return {
      props: {
        continents: data
      }
    }
  } catch (error) {
    return {
      props: {
        continents: []
      }
    }
  }
}