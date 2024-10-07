// pages/editable-box-demo.tsx

import React from 'react';
import MissionBox from '../Components/MissionBox'

const EditableBoxDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <MissionBox
        initialTitle="User Information"
        initialDescription="Enter your description here..."
      />
    </div>
  );
};

export default EditableBoxDemo;
