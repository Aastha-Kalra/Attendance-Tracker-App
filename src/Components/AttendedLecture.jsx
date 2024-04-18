import React from 'react'

const AttendedLecture = ({attendedLecture,setAttendedLecture}) => {

  return (
    <div>
    <div className="w-full flex justify-center items-center">
      <input type="number" className="focus:outline-none bg-slate-300 rounded-lg h-14 px-2 py-2 text-purple-800 w-96 shadow-md shadow-black" value={attendedLecture} onChange={(e)=>setAttendedLecture(e.target.value)} placeholder="Enter the number of attended lectures" />
    </div>
  </div>
  )
}

export default AttendedLecture