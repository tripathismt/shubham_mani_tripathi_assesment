import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return  (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-black shadow-sm px-4 py-2 bg-black text-m font-medium text-gray-400 hover:text-gray-50 "
        id="options-menu"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className='w-20 flex text-xl justify-evenly item-center'>
            <div>{props.name}</div>
            <div className='mt-1'><IoIosArrowDown/></div>
            </div>

      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1" role="none">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={toggleDropdown}>
              Option 1
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={toggleDropdown}>
              Option 2
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={toggleDropdown}>
              Option 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
