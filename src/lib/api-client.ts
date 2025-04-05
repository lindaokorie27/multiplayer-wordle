import type { SecretApiResponse } from "../app/api/secret/route";
import type { VerifyApiResponse } from "../app/api/verify/[word]/route";

export async function getSecretWord() {
  const res = await fetch(`${window.location.origin}/api/secret`);

  if (!res.ok) {
    throw new Error("Failed to fetch secret word");
  }

  const data = await res.json();
  return data as SecretApiResponse;
}

export async function verifyWord(word: string) {
  return await fetch(`/api/verify/${word}`).then(
    (x) => x.json() as Promise<VerifyApiResponse>
  );
}
