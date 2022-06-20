import { GetStaticPaths, GetStaticProps } from "next";
import { DefaultLayout } from "../layouts/Default";
import { Banner } from "./Banner";
import { Cities } from "./cities";
import { Informations } from "./informations";

interface City {
  id: number
  name: string
  country: string
  images: string[]
}

interface ContinentProps {
  continent: {
    id: number
    name: string
    wallpaper: string
    description: string
    cities: City[]
  }
}

export default function Continent ({continent}: ContinentProps) {
  return (
    <DefaultLayout>
      <> 
        <Banner title={continent.name} url={continent.wallpaper} />
        <Informations />
        <Cities cities={continent.cities} />
      </>
    </DefaultLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  
  try {
    const res = await fetch(`http://localhost:3000/api/continents/${params.id}`)
    const data = await res.json()

    return {
      props: {
        continent: data
      },
      revalidate: 1
    }
  } catch (error) {
    return {
      props: {},
      redirect: "/"
    }
  }
}