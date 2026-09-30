import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/);
}

export async function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on("line", async (line) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      state.readline.prompt();
      return;
    }

    const command = state.commands[words[0]];

    if (command) {
      try {
        await command.callback(state, ...words.slice(1));
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Unknown command");
    }

    state.readline.prompt();
  });
}