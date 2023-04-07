import React, { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useFetch from "../hooks/useFetch";
import Loading from "../component/shared/loading/Loading";
export const GLOBAL_CONTEXT = createContext();

const AppLayer = (props) => {
  const [user, userLoading] = useAuthState(auth);
  const [email, setEmail] = useState("NoEmail");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [parameter, setParameter] = useState(null);

  const [events, eventsLoading, eventsRefetch] = useFetch({
    api: "events",
    query: { page: page, search: search },
  });

  const [userEvents, userEventsLoading, userEventsRefetch] = useFetch({
    api: "events",
    query: { page: page, search: search, email: email },
  });

  if (userLoading || eventsLoading || userEventsLoading) {
    return <Loading />;
  }

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePage = ({ event, prev, next }) => {
    if (event) {
      setPage(parseInt(event.target.innerText));
    } else if (prev) {
      setPage(page - 1);
    } else if (next) {
      setPage(page + 1);
    }
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const value = {
    user,
    handleEmail,
    handleSearch,
    page,
    handlePage,
    events,
    eventsRefetch,
    userEvents,
    userEventsRefetch,
  };
  return <GLOBAL_CONTEXT.Provider value={value} {...props} />;
};

export default AppLayer;
