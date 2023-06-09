import React from "react";
import { GMTFinder, formateDate, timeZone } from "../../utility/formateTime";

const EventPageInformation = ({ event }) => {
  const { startDate, endDate, startTime, endTime, eventLocation, eventView } =
    event;
  const startingDate = `${startDate.slice(0, 10)}T${startTime}Z`;
  const endingDate = `${endDate.slice(0, 10)}T${endTime}Z`;
  return (
    <div className="py-6 flex flex-col md:flex-row gap-3 justify-between font-semibold  text-sm  md:text-lg ">
      <div className="flex flex-col gap-y-4 ">
        <div className="flex">
          <div className=" flex items-center gap-x-2    rounded-md">
            <i className="fa-regular fa-calendar-days  text-yellow-500  font-bold text-xl" />
            <p className="leading-none">
              {timeZone(startingDate)[0]} to {timeZone(endingDate)[0]}
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center gap-x-2 ">
            <i className="fa-regular fa-clock text-blue-500" />
            <p className="leading-none">
              {timeZone(startingDate)[1]} to {timeZone(endingDate)[1]}{" "}
              {GMTFinder(startDate)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3   text-sm  md:text-lg  font-semibold ">
        <div className="flex items-center gap-2 rounded-md">
          <h2 className="text-sm  md:text-lg  font-semibold  capitalize flex gap-x-2 items-center  ">
            <i className="fa-solid fa-map-location-dot text-green-500 text-xl" />
            {eventLocation}
          </h2>
        </div>
        <div className="flex items-center gap-2 ">
          <div className=" flex items-center gap-2 ">
            <i class="fa-solid fa-eye text-red-500 text-xl"></i>
            <p>Event Visited: {eventView}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPageInformation;
