type Props = {
  isLightOn: boolean;
  setIsLightOn: () => void;
};

const LightToggle = (props: Props) => {
  return (
    <div className="p-6 flex justify-end">
      <button className="cursor-pointer" onClick={props.setIsLightOn}>
        {props.isLightOn ? "Off" : "On"}
      </button>
    </div>
  );
};

export default LightToggle;
