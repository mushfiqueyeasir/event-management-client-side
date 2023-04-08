import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteItem } from "../../hooks/delete";

import { FacebookShareButton } from "react-share";

const EventPageHeader = ({
  eventTitle,
  user,
  rsvpCheck,
  handleRSVP,
  id,
  eventsRefetch,
}) => {
  const navigate = useNavigate();

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
        navigate("/home");
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row gap-3  justify-between ">
      <h3 className="font-bold text-3xl leading-tight sm:leading-normal capitalize">
        {eventTitle}
      </h3>
      <div className="flex gap-x-2">
        <div className="flex items-center gap-2 rounded-md">
          {user ? (
            <button
              disabled={rsvpCheck}
              onClick={() => handleRSVP(id)}
              className="btn bg-yellow-500  border-yellow-400  hover:bg-yellow-600  hover:border-yellow-600"
            >
              RSVP
            </button>
          ) : (
            <Link
              to="/join"
              className="btn bg-yellow-500  border-yellow-400  hover:bg-yellow-600  hover:border-yellow-600"
            >
              RSVP
            </Link>
          )}
        </div>
        <div className="flex items-center gap-2 rounded-md">
          <Link
            to={`/eventUpdate/${id}`}
            className="btn bg-blue-500  border-blue-400  hover:bg-blue-600  hover:border-blue-600"
          >
            Edit
          </Link>
        </div>

        <div className="flex items-center gap-2 rounded-md">
          <button
            onClick={() => handleDelete(id)}
            className="btn bg-red-500  border-red-400  hover:bg-red-600  hover:border-red-600"
          >
            Delete
          </button>
        </div>

        <div className="flex items-center gap-2 rounded-md">
          <FacebookShareButton
            url={`https://event-hive-rb.netlify.app/event/${id}`}
            quote={eventTitle}
          >
            <span className="btn bg-green-500  border-green-400  hover:bg-green-600  hover:border-green-600">
              Share
            </span>
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default EventPageHeader;
