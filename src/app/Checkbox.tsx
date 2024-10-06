"use client"; // This makes the component a Client Component

import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
  onChange: () => void; // Add onChange prop
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(); // Call onChange when the checkbox is toggled
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <label className="ml-2 text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;
