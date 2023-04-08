import React, { useContext } from "react";
import RequireAuth from "../../auth/RequireAuth";
import { Footer } from "../../component/footer/Footer";
import useFetch from "../../hooks/useFetch";
import Loading from "../../component/shared/loading/Loading";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";
import EventsSection from "../../component/eventsSection/EventsSection";

const MyProfilePage = () => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const [rsvpEvents, rsvpEventsLoading] = useFetch({
    api: "events",
    query: { email: user?.email, rsvp: user?.email },
  });
  if (rsvpEventsLoading) {
    return <Loading />;
  }

  return (
    <RequireAuth>
      <section className="min-h-[62vh] container mx-auto py-10">
        <h1 className="text-3xl font-bold py-6 text-center">My RSVP events</h1>

        <EventsSection events={rsvpEvents} />
      </section>
      <Footer />
    </RequireAuth>
  );
};

export default MyProfilePage;
