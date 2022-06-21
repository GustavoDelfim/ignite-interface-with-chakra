import { GetStaticPaths, GetStaticProps } from "next";
import { Continent as ContinentInterface } from "../home/Continents";
import { DefaultLayout } from "../layouts/Default";
import { Banner } from "./Banner";
import { Cities } from "./cities";
import { Informations } from "./informations";

interface ContinentProps {
  continent: ContinentInterface
}

export default function Continent ({continent}: ContinentProps) {
  return (
    <DefaultLayout>
      <> 
        <Banner title={continent.name} url={continent.wallpaper} />
        <Informations {...continent.article} />
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