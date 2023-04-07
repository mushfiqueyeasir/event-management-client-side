import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";
import { deleteItem } from "../../hooks/delete";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { formateDate, timeZone } from "../../utility/formateTime";
import { update } from "../../hooks/update";

const EventCard = ({ event }) => {
  const { user, eventsRefetch } = useContext(GLOBAL_CONTEXT);
  const {
    _id,
    eventImage,
    eventTitle,
    eventDescription,
    eventLocation,
    startDate,
    endDate,
    startTime,
    endTime,
    eventCreator,
    eventAttendees,
  } = event;

  const rsvpCheck = eventAttendees.find((item) => item.email === user?.email);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem({ id: `events/${id}`, refetch: eventsRefetch, rsvp: true });
      }
    });
  };
  const handleRSVP = (id) => {
    const data = event;
    data.eventAttendees.push({ email: user?.email, avatar: user.photoURL });
    console.log(data);
    update({
      id: `events/${id}`,
      data: data,
      refetch: eventsRefetch,
      rsvp: true,
    });
  };

  return (
    <div
      // to={`/event/${_id}`}
      className="bg-white overflow-hidden shadow rounded-2xl  cursor-pointer hover:scale-[1.015] duration-300  relative"
    >
      {user?.email === eventCreator && (
        <Link
          to={`/eventUpdate/${_id}`}
          className="absolute top-3 left-3 bg-blue-500  px-3  py-2 rounded-full text-white hover:scale-[1.2] duration-300"
        >
          <i className="fa-solid fa-pen" />
        </Link>
      )}
      {user?.email === eventCreator && (
        <button
          onClick={() => handleDelete(_id)}
          className="absolute top-3 right-3 bg-red-500  px-3  py-2 rounded-full text-white hover:scale-[1.2] duration-300"
        >
          <i className="fa-solid fa-trash" />
        </button>
      )}

      <img
        src={eventImage}
        alt="People"
        className="w-full object-cover h-48 sm:h-48 md:h-64"
      />
      <div className="p-4 md:px-6">
        <div className="flex  justify-between">
          <h3 className="font-bold text-2xl leading-tight sm:leading-normal capitalize">
            {eventTitle.slice(0, 17)}
            {eventTitle.length > 17 && "..."}
          </h3>
          <h2 className="text-lg  font-semibold  capitalize flex gap-x-2 items-center">
            <i className="fa-solid fa-map-location-dot"></i>
            {eventLocation.replaceAll(" ", "").slice(0, 10)}
          </h2>
        </div>

        <div className="py-2 min-h-[4.8rem] lg:min-h-[5.5rem] text-sm lg:text-base">
          <p>
            {eventDescription.slice(0, 150)}
            {eventDescription.length > 150 && "..."}
          </p>
        </div>
        <hr className="py-2 border-1 border-black" />

        <div className="flex justify-between">
          <div className="flex  flex-col gap-y-2">
            <div className="text-sm flex items-center gap-x-2">
              <i className="fa-regular fa-calendar-days" />
              <p className="leading-none">
                {formateDate(startDate)} to {formateDate(endDate)}
              </p>
            </div>
            <div className="text-sm flex items-center gap-x-2">
              <i className="fa-regular fa-clock" />
              <p className="leading-none">
                {startTime} to {endTime} (UTC{timeZone(startDate)})
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {user ? (
              <button
                disabled={rsvpCheck}
                onClick={() => handleRSVP(_id)}
                className="btn  btn-primary"
              >
                RSVP
              </button>
            ) : (
              <Link to="/join" className="btn  btn-primary">
                RSVP
              </Link>
            )}
            <Link to={`/event/${_id}`} className="btn  btn-primary">
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
