import React, { type Dispatch, type SetStateAction } from "react";

type Props = {
  setCounter: Dispatch<SetStateAction<number>>;
};

const ClickCounter = (props: Props) => {
  const counterHandler = () => {
    props.setCounter((current) => current + 1);
  };
  return (
    <div className="flex justify-center">
      <button onClick={counterHandler} className="border p-2 rounded-2xl">
        Click Counter
      </button>
    </div>
  );
};

export default ClickCounter;
