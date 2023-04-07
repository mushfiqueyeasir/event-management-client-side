import React from "react";

const EventAttendees = ({ eventAttendees }) => {
  return (
    <div className="py-6 md:w-[35%] lg:w-[20%]">
      <h2 className="text-2xl font-bold py-2">Event Attendees:</h2>
      <div className=" flex flex-col  gap-y-2">
        {eventAttendees.map((attendees) => (
          <div className="flex items-center  gap-3 border border-gray-300 p-2  rounded-md">
            <img
              src={attendees.avatar}
              alt=""
              className="w-[35px] rounded-full"
            />
            <h2 className="text-base md:text-md font-semibold">
              {attendees.email}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAttendees;
