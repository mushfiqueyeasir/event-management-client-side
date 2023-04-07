import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Loading from "../../component/shared/loading/Loading";

import { update } from "../../hooks/update";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";
import EventPageHeader from "./EventPageHeader";
import EventPageInformation from "./EventPageInformation";
import EventAttendees from "./EventAttendees";

const EventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, eventsRefetch } = useContext(GLOBAL_CONTEXT);

  const [uniqueEvent, uniqueEventLoading] = useFetch({
    api: "events",
    parameter: id,
  });

  if (uniqueEventLoading) {
    return <Loading />;
  }

  const { _id, eventImage, eventTitle, eventDescription, eventAttendees } =
    uniqueEvent.data;
  const rsvpCheck = eventAttendees.find((item) => item.email === user?.email);

  const handleRSVP = (id) => {
    const data = uniqueEvent.data;
    data.eventAttendees.push({ email: user?.email, avatar: user?.photoURL });
    console.log(data);
    update({
      id: `events/${id}`,
      data: data,
      refetch: eventsRefetch,
      rsvp: true,
    });
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="container mx-auto py-10">
      <button onClick={handleGoBack} className="btn btn-outline mb-6 ml-3">
        <svg
          class="w-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Events
      </button>

      {eventImage && (
        <div className="px-2 ">
          <img
            src={uniqueEvent.data.eventImage}
            alt=""
            className="h-[60vw]  md:h-[20vw] object-cover w-full rounded-2xl shadow-md"
          />
        </div>
      )}

      <div className="p-2 md:p-6 ">
        <EventPageHeader
          eventTitle={eventTitle}
          user={user}
          rsvpCheck={rsvpCheck}
          handleRSVP={handleRSVP}
          id={_id}
          eventsRefetch={eventsRefetch}
        />
        <EventPageInformation event={uniqueEvent.data} />

        <div className="">
          <h2 className="text-2xl font-bold py-2">Event Description:</h2>
          <p className="text-xl text-justify">{eventDescription}</p>
        </div>

        {eventAttendees.length > 0 && (
          <EventAttendees eventAttendees={eventAttendees} />
        )}
      </div>
    </section>
  );
};

export default EventPage;
