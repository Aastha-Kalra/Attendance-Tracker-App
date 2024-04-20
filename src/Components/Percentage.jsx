import React from "react";

const Percentage = ({ percent, needLecture }) => {
  return (
    <div className="flex flex-col justify-center items-center text-3xl text-blue-800 font-bold text-pretty drop-shadow-[0_35px_35px_rgba(0,10,0,0.225)] text   ">
      <div className="animate-bounce">Attended Percentage : {percent} %</div>
      <div className="animate-bounce mt-10">Lectures : {needLecture}</div>
    </div>
  );
};

export default Percentage;
