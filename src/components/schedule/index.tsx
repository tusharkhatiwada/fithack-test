import * as React from "react";
import Calendar from "react-calendar";
import SessionLists from "./lists";
import "react-calendar/dist/Calendar.css";
import { userData } from "../../data";

export default function Schedule() {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

  React.useEffect(() => {
    const filteredDates = userData.sessions.map((session) => new Date(session.date));
    console.log(filteredDates);
    setSelectedDates(filteredDates);
  }, []);
  return (
    <div className='p-4 rounded shadow bg-white'>
      <h2 className='text-xl font-semibold text-gray-900'>Sessions</h2>
      <SessionLists />
      <Calendar value={selectedDates} />
    </div>
  );
}
