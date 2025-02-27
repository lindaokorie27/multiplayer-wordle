import { NextApiRequest, NextApiResponse } from "next";
import data from "../../../constants/words.json";

export type SecretApiResponse = {
  secret: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SecretApiResponse>
) {
  const { length, items } = data;

  const randomInt = Math.floor(Math.random() * (length + 1));
  const secret = items[randomInt];

  res.status(200).json({ secret });
}
