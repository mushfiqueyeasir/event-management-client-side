import React from "react";

import EventCard from "../eventCard/EventCard";
import Pagination from "../pagination/Pagination";

const EventsSection = ({ events }) => {
  console.log(events);
  return (
    <section className="container mx-auto py-6 px-2 min-h-[49vh]">
      <Pagination events={events} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.data.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
