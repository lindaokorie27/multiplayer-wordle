import { NextResponse } from "next/server";
import data from "../../../../constants/words.json";
import { WORD_LENGTH } from "../../../../lib/helpers";

export type VerifyApiResponse = {
  valid: boolean;
};

type ParamsType = { params: { word: string } };

export async function GET(request: Request, { params }: ParamsType) {
  const { items } = data;

  const { word } = params;

  const valid =
    word && word.length === WORD_LENGTH ? items.includes(word) : false;
  return NextResponse.json({ valid });
}
