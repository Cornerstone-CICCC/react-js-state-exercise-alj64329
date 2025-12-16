import React, { type Dispatch, type SetStateAction } from "react";

type Props = {
  setLottoNumbers: Dispatch<SetStateAction<number[]>>;
};

const LottoNumbers = (props: Props) => {
  const getRandomNums = () => {
    const count = 7;
    const min = 1;
    const max = 50;
    const pickedNums = [];

    for (let i = 0; i < count; i++) {
      pickedNums.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    props.setLottoNumbers(pickedNums);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={getRandomNums}
        className="border p-2 rounded-2xl cursor-pointer"
      >
        Generate Lotto Numbers
      </button>
    </div>
  );
};

export default LottoNumbers;
