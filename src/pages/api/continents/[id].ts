import { NextApiRequest, NextApiResponse } from "next"
import continents from '@/pages/api/continents/cities.json'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const { query } = req

  if (!Object.keys(query).length) {
    return res.status(400).json(null)
  }

  for (const continent of continents) {
    if (parseInt(query.id as string) === continent.id) {
      return res.status(200).json(continent)
    }
  }
  
  res.status(400).json(null)
}
