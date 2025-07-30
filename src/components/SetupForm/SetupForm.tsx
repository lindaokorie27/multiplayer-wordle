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
import * as api from "../../lib/api-client";
import { useEffect } from "react";

const formSchema = z.object({
  mode: z.string().regex(/singleplayer|multiplayer/),
});

type SetupFormProps = {
  onDone?: (id: string) => void;
};
const SetupForm: React.FC<SetupFormProps> = ({ onDone }) => {
  const { state, dispatch } = useGameSessions();

  // Remove finished game on mount
  useEffect(() => {
    if (state && state.gamePhase === "finished") {
      dispatch({
        type: "REMOVE_GAME",
        payload: { gameId: state.gameId || "" },
      });
    }
  }, [state, dispatch]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mode: "singleplayer",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const gameId = nanoid(7);
    const { secret } = await api.getSecretWord();

    if (values.mode === "singleplayer") {
      dispatch({
        type: "CREATE_SINGLEPLAYER_GAME",
        payload: { gameId, word: secret },
      });
    } else {
      const players = [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
      ];
      dispatch({
        type: "CREATE_MULTIPLAYER_GAME",
        payload: { gameId, players, word: secret },
      });
    }
    if (onDone) {
      onDone(gameId);
    }
    console.log(values);
  };

  if (state && state.gamePhase === "playing") {
    return (
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-4">Game in Progress</h1>
        <p className="text-gray-600">
          You already have a game in progress. Please finish or reset it before
          starting a new one.
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            if (onDone) {
              onDone(state.gameId || "");
            }
          }}
        >
          Continue Game
        </Button>
        <Button
          variant="secondary"
          className="mt-2 ml-2"
          onClick={() => {
            dispatch({
              type: "REMOVE_GAME",
              payload: { gameId: state.gameId || "" },
            });
            if (onDone) {
              onDone("");
            }
          }}
        >
          Reset Game
        </Button>
      </div>
    );
  }

  return (
    <>
      <h1 className="font-extrabold text-3xl mb-5">Create Game</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
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
                        <RadioGroupItem disabled value="multiplayer" />
                      </FormControl>
                      <FormLabel className="font-normal text-gray-400">
                        Someone else <span>(coming soon!)</span>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Start Game</Button>
        </form>
      </Form>
    </>
  );
};
export default SetupForm;
