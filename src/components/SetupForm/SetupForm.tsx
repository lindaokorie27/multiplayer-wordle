import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { z } from "zod";
import { useGameSessions } from "@/context/GameContext";

const formSchema = z.object({
  mode: z.string().regex(/singleplayer|multiplayer/gm),
});

type SetupFormProps = {
  onDone?: (id: string) => void;
};
const SetupForm: React.FC<SetupFormProps> = ({ onDone }) => {
  const { dispatch } = useGameSessions();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mode: "singleplayer",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const gameId = nanoid(7);
    const word = "SECRET"; // Replace with a word generation logic

    if (values.mode === "singleplayer") {
      dispatch({ type: "CREATE_SINGLEPLAYER_GAME", payload: { gameId, word } });
    } else {
      const players = [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
      ];
      dispatch({
        type: "CREATE_MULTIPLAYER_GAME",
        payload: { gameId, players, word },
      });
    }
    if (onDone) {
      onDone(gameId);
    }
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="mode"
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
                      <RadioGroupItem value="singleplayer" />
                    </FormControl>
                    <FormLabel className="font-normal">Solo</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="multiplayer" />
                    </FormControl>
                    <FormLabel className="font-normal">Someone else</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Start Game</Button>
      </form>
    </Form>
  );
};
export default SetupForm;
