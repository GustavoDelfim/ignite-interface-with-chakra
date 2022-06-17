import { NextApiRequest, NextApiResponse } from "next"
import continents from '@/pages/api/continents/cities.json'


export default function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(continents)
}
