import "./App.css";
import Example from "./components/Example";
import ToggleButton from "./components/ToggleButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center gap-4 relative">
        <h1 className="text-2xl text-[var(--text)] font-bold">
          Welcome to your project!
        </h1>
        <Example />
        <ToggleButton />
      </main>
    </ThemeProvider>
  );
}

export default App;
