import React, { useState } from "react";
import AttendedLecture from "./Components/AttendedLecture";
import TotalLectures from "./Components/TotalLectures";
import Button from "./Components/Button";
import Percentage from "./Components/Percentage";
const Attendence = () => {
  const [attendedLecture, setAttendedLecture] = useState();
  const [totalLectures, setTotalLectures] = useState();
  const [percentage, setPercentage] = useState(0);
  const [needLecture, setNeedLecture] = useState('😊');
  const [emoji,setEmoji]=useState(null)
  const calculatePercentage = () => {
    if(Number(totalLectures)>=Number(attendedLecture)){
      const percent = (attendedLecture / totalLectures) * 100;
      setPercentage(`${percent.toFixed(2)}`);
  
      if (percent >= 75) {
        setNeedLecture("WOW !!🤩 You have reached 75% attendence");
        setEmoji('🥳')
      } else {
        const needAttendence = Math.ceil(0.75 * totalLectures - attendedLecture);
        setNeedLecture(`Oh No!! ☹️ You are required to attend ${needAttendence} lectures`);
        setEmoji('😮')
      }
    }
    else{
      alert("Attend lectures should be less than or equal to total lectures")
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10 tracking-wider">
      <div className="text-3xl font-extrabold text animate-pulse">
        Attendence Tracker App
      </div>

      <TotalLectures
        totalLectures={totalLectures}
        setTotalLectures={setTotalLectures}
      />
      <AttendedLecture
        attendedLecture={attendedLecture}
        setAttendedLecture={setAttendedLecture}
      />
      <Button calculatePercentage={calculatePercentage} />
      <Percentage percent={percentage} needLecture={needLecture} emoji={emoji} />

      <footer className="bg-sky-700 w-full h-10 text-white items-center flex justify-center my-0 absolute bottom-0">
        Made By Aastha Kalra &#10084;
      </footer>
    </div>
  );
};

export default Attendence;
