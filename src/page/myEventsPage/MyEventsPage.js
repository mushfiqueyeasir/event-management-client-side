import React, { useContext } from "react";
import RequireAuth from "../../auth/RequireAuth";
import SearchBar from "../../component/searchBar/SearchBar";
import EventsSection from "../../component/eventsSection/EventsSection";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";
import { Footer } from "../../component/footer/Footer";

const MyEventsPage = () => {
  const { user, userEvents, handleEmail } = useContext(GLOBAL_CONTEXT);
  handleEmail(user?.email);

  return (
    <RequireAuth>
      <section>
        <SearchBar />
        <EventsSection events={userEvents} />
        <Footer />
      </section>
    </RequireAuth>
  );
};

export default MyEventsPage;
