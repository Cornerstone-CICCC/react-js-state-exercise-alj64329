import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";

function App() {
  const [isLightOn, setIsLightOn] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [counter, setCounter] = useState(0);

  return (
    <div
      className={`${
        isLightOn ? "bg-white text-black" : "bg-black text-white"
      } h-screen w-screen p-4 flex flex-col gap-4`}
    >
      <div>
        <h2>Light Toggle</h2>
        <LightToggle
          isLightOn={isLightOn}
          setIsLightOn={() => setIsLightOn((current) => !current)}
        />
      </div>

      <div className="pt-4">
        <h2 className="pb-4">Lotto Number</h2>
        <LottoNumbers setLottoNumbers={setLottoNumbers} />
        {lottoNumbers.length > 0 && (
          <div className="flex gap-2.5 justify-center pt-8">
            {lottoNumbers.map((num, index) => (
              <div key={index}>{num}</div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4">
        <h2>Click Counter</h2>
        <ClickCounter setCounter={setCounter} />
        <div className="output text-center pt-6">{counter}</div>
      </div>
    </div>
  );
}

export default App;
