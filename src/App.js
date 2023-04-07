import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./page/homePage/HomePage";
import JoinPage from "./page/joinPage/JoinPage";
import CreateEventPage from "./page/createEventPage/CreateEventPage";
import MyEventsPage from "./page/myEventsPage/MyEventsPage";
import MyProfilePage from "./page/myProfilePage/MyProfilePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./component/navBar/NavBar";
import AppLayer from "./layer/AppLayer";
import EventPage from "./page/eventPage/EventPage";
import EventEditPage from "./page/eventEditPage/EventEditPage";

function App() {
  return (
    <AppLayer>
      <NavBar />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/myEvents" element={<MyEventsPage />} />
        <Route path="/createEvents" element={<CreateEventPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/eventUpdate/:id" element={<EventEditPage />} />
      </Routes>
      <ToastContainer />
    </AppLayer>
  );
}

export default App;
