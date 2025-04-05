import { NextResponse } from "next/server";
import data from "../../../constants/words.json";

export type SecretApiResponse = {
  secret: string;
  error?: string;
};

export async function GET() {
  const { length, items } = data;
  const randomWord = items[Math.floor(Math.random() * length)];
  return NextResponse.json({ secret: randomWord });
}
