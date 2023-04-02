import React from "react";

const PlayAgain = () => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-green-500 text-white rounded-md px-5 py-4 text-2xl font-bold hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onClick={() => window.location.reload()}
      >
        Играј повторно
      </button>
    </div>
  );
};

export default PlayAgain;
