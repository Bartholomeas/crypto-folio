import React from 'react';

function Loader() {
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center gap-sm rounded-full bg-support p-xs">
      <span className="top-[50%] left-[50%] w-[30px] h-[30px] rounded-full border-t-4 border-t-accent z-[100000] animate-spin" />
      <p className="text-font font-semibold text-md">Loading..</p>
    </div>
  );
}

export default Loader;
