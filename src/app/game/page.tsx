"use client";
import SetupForm from "@/components/SetupForm/SetupForm";
import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateGame = () => {
  const router = useRouter();

  const handleGoBackClick = () => router.back();

  const onSetupDone = (id: string) => router.push(`/game/${id}`);

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button variant="link" className="px-0 my-5" onClick={handleGoBackClick}>
        <ArrowLeft />
        Go Back
      </Button>
      <div>
        <h1 className="font-extrabold text-3xl mb-5">Create Game</h1>
        <SetupForm onDone={onSetupDone} />
      </div>
    </div>
  );
};
export default CreateGame;
