import { NextRequest, NextResponse } from "next/server"
import continents from '@/pages/api/cities.json'


export default function handler (req, res) {
  console.log(continents)
  res.status(200).json(continents)
}
