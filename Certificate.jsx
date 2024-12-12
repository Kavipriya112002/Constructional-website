import React, { useEffect, useState } from 'react';

const Certificate = ({ id, title, title1, image1, image2, isOpen, onClick }) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShowBackground(false);
    }
  }, [isOpen]);

  return (
    <div className="container mx-auto px-4 max-md:px-1">
      <p
        className="text-lg max-md:text-xs cursor-pointer my-3 max-md:pl-0 pl-10 max-md:text-center bg-pink-200 flex justify-between"
        onClick={() => {
          onClick(id);
          setShowBackground(true);
        }}
        style={{ backgroundColor: showBackground ? '' : 'pink' }}
      >
        <span className='px-6'>
          {title} {title1}
        </span>
       <span className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</span>
      </p>

      {isOpen && (
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <img className="px-30 py-3 max-md:p-2 w-1/3 max-md:w-3/5" src={image1} alt={title} />
          </div>
          {image2 && (
            <div className='flex justify-center'>
              <img className="px-30 py-3 max-md:p-2 w-1/3 max-md:w-3/5" src={image2} alt={title1} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Certificate;