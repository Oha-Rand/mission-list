"use client"; // Make sure this is also a Client Component

import InfoBox from "./Infobox";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-black">Simple Info Box Component</h1>
      <InfoBox />
    </div>
  );
};

export default Home;
