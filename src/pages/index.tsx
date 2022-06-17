import { GetServerSideProps } from "next";
import { Banner } from "./home/Banner"
import { Continent, Continents } from "./home/Continents";
import { Topics } from "./home/Topics";
import { DefaultLayout } from "./layouts/Default";

interface HomeProps {
  continents: Continent[]
}

export default function Home ({continents}: HomeProps)  {
  return (
    <DefaultLayout>
      <>
        <Banner />
        <Topics />
        <Continents continents={continents} />
      </>
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
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