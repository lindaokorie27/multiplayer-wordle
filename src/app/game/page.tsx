"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { NumberInput } from "@/components/ui/number-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  player: z.string().regex(/computer|someone-else/gm),
  rounds: z.number().min(1).max(5),
});

const CreateGame = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      player: "computer",
      rounds: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  const handleGoBackClick = () => router.back();

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button variant="link" className="px-0 my-5" onClick={handleGoBackClick}>
        <ArrowLeft />
        Go Back
      </Button>
      <div>
        <h1 className="font-extrabold text-3xl mb-5">Create Game</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="player"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Who do you want to play with?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="computer" />
                        </FormControl>
                        <FormLabel className="font-normal">Computer</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="someone-else" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Someone else
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rounds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How many rounds do you want to go?</FormLabel>
                  <FormControl>
                    <NumberInput
                      placeholder="Select Round"
                      defaultValue={field.value}
                      min={1}
                      max={5}
                      onValueChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Start Game</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default CreateGame;
