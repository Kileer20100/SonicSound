import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Button } from '@heroui/react';

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="dark text-foreground bg-background flex h-screen w-screen flex-col items-center justify-center gap-4">
      
      <Button
        color="primary" 
        variant="shadow" 
        size="lg"
      >
        My Button
      </Button>

      <form
        className="flex gap-2 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          className="px-3 py-1.5 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="px-4 py-1.5 bg-zinc-700 rounded-xl text-white">Greet</button>
      </form>
      <p className="text-emerald-400 mt-2">{greetMsg}</p>

    </main>
  );
}

export default App;
