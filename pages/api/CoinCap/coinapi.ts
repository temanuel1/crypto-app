import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await fetch(`https://api.coincap.io/v2/assets?limit=28`);
  const dataTwo = await data.json();
  return res.status(200).json(dataTwo);
}
