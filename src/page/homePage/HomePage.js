import React, { useContext } from "react";
import SearchBar from "../../component/searchBar/SearchBar";
import EventsSection from "../../component/eventsSection/EventsSection";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";
import { Footer } from "../../component/footer/Footer";

const HomePage = () => {
  const { events, user, handleEmail } = useContext(GLOBAL_CONTEXT);
  handleEmail(user?.email);
  return (
    <section>
      <SearchBar />
      <EventsSection events={events} />
      <Footer />
    </section>
  );
};

export default HomePage;
