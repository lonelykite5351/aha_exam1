import React, {useState} from 'react';
import './PasswordInput.scss';
import PasswordChecklist from 'react-password-checklist';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
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
      <div className='h-[907px] flex justify-center items-start bg-[#181818] \
        py-5'>
        <form className='w-[335px]'>
          <div className='relative'>
            <label className='block text-white text-[12px] leading-none \
              font-medium text-slate-700 tracking-[0.4px] bg-[#181818] \
              left-[6px] bottom-[100%] translate-y-2/4 absolute px-[4px] '>
              Password
            </label>
            <input type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              className='w-full text-base bg-[#181818] text-white \
              border-white/50 border-[3px] rounded-lg leading-[24px] \
              placeholder:text-white/50 mb-5 tracking-[0.15px] \
              px-[16px] py-[12px] outline-0 \
              focus:border-[#00A3FF] hover:border-white'
            >
            </input>
          </div>
          <section className='bg-[#242424] rounded-lg px-[12px] py-[8px] \
            shadow-[4px_4px_20px_rgba(0,0,0,0.3)]'>
            <PasswordChecklist
              className='passwordChecklist flex flex-col \
                justify-center items-centerleading-none '
              rules={
                ['capital', 'lowercase', 'number', 'specialChar', 'minLength']
              }
              minLength={8}
              value={password}
              messages={{
                capital: 'Have at least one uppercase letter',
                lowercase: 'Have at least one lowercase letter',
                number: 'Have at least one number',
                specialChar:
                  'Have at least one special character(!@#$...etc)',
                minLength: 'Longer than 8 characters',
              }}
              iconComponents={{
                ValidIcon: <img src="validIcon.png" />,
                InvalidIcon: <img src="invalidIcon.png" />,
              }}
            />
          </section>
        </form>
      </div>
    </div>
  );
};

export default PasswordInput;
