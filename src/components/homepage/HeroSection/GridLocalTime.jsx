import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const GridLocalTime = () => {
  const [time, setTime] = useState(dayjs().tz('America/Toronto'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().tz('America/Toronto'));
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const hourlyTimeFormat = time.format('h:mm a');
  const dateFormat = time.format('MMM DD YYYY');
  const hour = time.hour();
  //  const hour = 12;

  // Determine if the current time is between 7 PM and 6 AM
  const isNight = hour >= 19 || hour < 6;

  return (
    <div
      className={`hidden invisible relative md:visible md:block col-span-3 row-span-4 text-center rounded-2xl ${
        isNight
          ? 'local-container-night text-neutral-50'
          : 'local-container-day'
      } overflow-hidden`}>
      <div className="absolute p-6 flex flex-col gap-0 items-start">
        <p
          className={`text-lg leading-none uppercase font-title font-medium z-10 ${
            isNight ? `text-neutral-50` : `text-[#f59758]`
          }`}>
          montreal
        </p>
      </div>
      <div className="grid place-items-center w-full h-full mt-2">
        <div
          className={`aspect-square mx-auto h-full max-h-[80%] rounded-full text-center grid place-items-center ${
            isNight ? 'local-circle-night' : 'local-circle-day'
          }`}>
          <div className="flex flex-col gap-2 p-4 -mt-4">
            <p
              className={`time-subtitle font-normal  ${
                isNight ? `text-neutral-500` : `text-neutral-50`
              }`}>
              {dateFormat}
            </p>
            <p className="time-main font-title tracking-tight">
              {hourlyTimeFormat}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GridLocalTime;
