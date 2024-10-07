"use client";
import React, { useState, ChangeEvent } from 'react';

// Define the props interface
interface EditableBoxProps {
  initialTitle: string;
  initialDescription?: string;
}

const EditableBox: React.FC<EditableBoxProps> = ({
  initialTitle,
  initialDescription = '',
}) => {
  // State to manage the title and description
  const [title, setTitle] = useState<string>(initialTitle);
  const [description, setDescription] = useState<string>(initialDescription);

  // Handler for title change
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handler for description change
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="border border-black rounded-lg p-6 shadow-md bg-white">
      {/* Editable title */}
      <input
        type="text"
        className="w-full mb-4 p-2 border border-gray-300 rounded-md text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={handleTitleChange}
        placeholder="Edit title..."
      />

      {/* Editable description */}
      <textarea
        className="w-full h-24 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Type your description here..."
      ></textarea>
    </div>
  );
};

export default EditableBox;
