import React, {useState} from 'react';
// import './PasswordInput.css';
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
      <div className='flex justify-center items-start bg-[#181818] h-[907px]'>
        <form>
          <label className='block'>
            <span className='block text-sm font-medium text-slate-700'>
              Password
            </span>
            <input type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-[9px] py-[8px] bg-[#181818] text-white \
              border-white/50 border-[3px] rounded-lg leading-6 \
              placeholder:text-white/50 mb-5'
            >
            </input>
            <section className='bg-[#242424] rounded-lg py-4'>
              <PasswordChecklist
                className='checklist_Section flex flex-col \
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
          </label>
        </form>
      </div>
    </div>
  );
};

export default PasswordInput;
