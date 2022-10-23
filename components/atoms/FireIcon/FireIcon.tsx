import { AiFillFire } from 'react-icons/ai';

const FireIcon = () => {
  return (
    <div className='relative flex items-center justify-center w-fit'>
      <AiFillFire className='fill-orange-500 text-xl' />
      <AiFillFire className='absolute bottom-1 fill-yellow-400 text-md ' />
    </div>
  );
};

export default FireIcon;
