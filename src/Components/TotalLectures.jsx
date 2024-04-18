import React from "react";

const TotalLectures = ({totalLectures,setTotalLectures}) => {

  return (
    <div>
      <div className="w-full  flex justify-center items-center ">
        <input type="number" className="focus:outline-none bg-slate-300 rounded-lg h-14 px-2 py-2 text-purple-800 w-96 shadow-md shadow-black" value={totalLectures} onChange={(e)=>setTotalLectures(e.target.value)} placeholder="Enter the number of total lectures" />
      </div>
    </div>
  );
};

export default TotalLectures;
