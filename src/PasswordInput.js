import './PasswordInput.css';

const PasswordInput = () => {
  return (
    <div className=
      "PasswordInput w-[1219px] h-[1214px] flex flex-col justify-between">
      <div className=
        "flex content-center items-center \
        bg-[#181818] h-[283px] px-[5%] rounded-t-[30px]">
        <h1 className=
          "w-full text-white text-[96px] leading-none font-bold">
          Password Input
        </h1>
      </div>
      <div className="bg-[#181818] h-[907px]">
        <h1 className="text-white">bottom</h1>
      </div>
    </div>
  );
};

export default PasswordInput;
