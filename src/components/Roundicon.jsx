import { useState } from "react";

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="radio"
      checked={checked}
      onClick={() => setChecked(!checked)}
      readOnly
      className="w-[24px] h-[24px] accent-black cursor-pointer"
    />
  );
}
