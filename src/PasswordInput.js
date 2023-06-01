import './PasswordInput.css';

const PasswordInput = () => {
  return (
    <div className=
      'PasswordInput bg-white rounded-t-[50px] w-[1219px] h-[1214px] \
      flex flex-col justify-between'>
      <div className=
        'flex justify-center items-center \
        bg-[#181818] h-[283px] px-[5%] rounded-t-[50px]'>
        <h1 className=
          'w-full text-white text-[96px] leading-none font-bold'>
          Password Input
        </h1>
      </div>
      <div className='flex justify-center items-start bg-[#181818] h-[907px]'>
        <form>
          <label className='block'>
            <span className='block text-sm font-medium text-slate-700'>
              Password
            </span>
            <input type='text' placeholder='Password'
              className='w-full px-[9px] py-[8px] bg-[#181818] text-white \
              border-white/50 border-[3px] rounded-lg leading-6 \
              placeholder:text-white/50'
            >

            </input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default PasswordInput;
