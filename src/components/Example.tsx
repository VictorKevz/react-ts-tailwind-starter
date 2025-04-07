import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((num: number) => num + 1);
  };
  const handleDecrease = () => {
    setCount((num: number) => (num === 0 ? 0 : num - 1));
  };
  return (
    <div className="max-w-lg w-full min-h-52 flex items-center justify-center gap-4 px-3 py-2.5 border border-gray-400 rounded-lg">
      <button
        className="w-8 h-9 flex flex-col items-center justify-center bg-[var(--primary-color)] rounded-xl"
        onClick={handleDecrease}
        type="button"
      >
        <Remove />
      </button>
      <span className="text-[var(--text)] text-xl font-bold">{count}</span>
      <button
        className="w-8 h-9 flex flex-col items-center justify-center bg-[var(--primary-color)] text-[var(--text)] rounded-xl"
        onClick={handleIncrease}
        type="button"
      >
        <Add />
      </button>
    </div>
  );
};

export default Example;
