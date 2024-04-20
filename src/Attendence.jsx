import React, { useState } from "react";
import AttendedLecture from "./Components/AttendedLecture";
import TotalLectures from "./Components/TotalLectures";
import Button from "./Components/Button";
import Percentage from "./Components/Percentage";
const Attendence = () => {
  const [attendedLecture, setAttendedLecture] = useState();
  const [totalLectures, setTotalLectures] = useState();
  const [percentage, setPercentage] = useState(0);
  const [needLecture, setNeedLecture] = useState(0);

  const calculatePercentage = () => {
    const percent = (attendedLecture / totalLectures) * 100;
    setPercentage(`${percent.toFixed(2)}`);

    if (percent >= 75) {
      setNeedLecture("You have reached 75% attendence");
    } else {
      const needAttendence = Math.ceil(0.75 * totalLectures - attendedLecture);
      setNeedLecture(`You are required to attend ${needAttendence} lectures`);
    }
  };

  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col justify-center items-center gap-10 tracking-wider">
      <div className="text-3xl font-bold text-sky-500 text">
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
      <Percentage percent={percentage} needLecture={needLecture} />

      <footer className="bg-indigo-900 w-full h-10 text-white items-center flex justify-center">
        Made By Aastha Kalra &#10084;
      </footer>
    </div>
  );
};

export default Attendence;
