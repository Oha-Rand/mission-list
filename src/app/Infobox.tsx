"use client"; // This makes the component a Client Component

import React, { useState } from 'react';
import Draggable from 'react-draggable'; // Import Draggable from react-draggable
import Checkbox from './Checkbox'; // Importing the Checkbox component

const InfoBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Draggable>
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-80 cursor-move">
        <div className="flex items-start mb-2">
          <Checkbox label="" onChange={handleCheckboxChange} />
          <div className="ml-2">
            <h2 className="text-lg font-semibold text-black">Header</h2>
            <p className="text-gray-700">This is the description text for the box. It provides additional information.</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default InfoBox;
