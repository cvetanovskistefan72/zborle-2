import React from "react";
import { FaQuestion } from "react-icons/fa";

interface IInfoHeader {
  headerText: string;
}

const InfoHeader: React.FC<IInfoHeader> = ({ headerText }) => {
  return (
    <div className="flex justify-between items-center space-x-2">
      <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
        <FaQuestion size={14} />
      </div>
      <h1 className="ml-4 text-2xl font-bold tracking-wider ">{headerText}</h1>
      <div></div>
    </div>
  );
};

export default InfoHeader;
