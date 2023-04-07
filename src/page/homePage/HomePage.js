import React, { useContext } from "react";
import SearchBar from "../../component/searchBar/SearchBar";
import EventsSection from "../../component/eventsSection/EventsSection";
import RequireAuth from "../../auth/RequireAuth";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";

const HomePage = () => {
  const { events, user, handleEmail } = useContext(GLOBAL_CONTEXT);
  handleEmail(user?.email);
  return (
    <section>
      <SearchBar />
      <EventsSection events={events} />
    </section>
  );
};

export default HomePage;
